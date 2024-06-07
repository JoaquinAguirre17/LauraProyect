const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const pool = require('./db');
const moment = require('moment');
const mercadopago = require('mercadopago');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const enviarCorreoElectronico = async (cliente, fechaFormateada, tipoServicio) => {
    try {
        const mensaje = `El cliente ${cliente}, reservó el turno para el día ${fechaFormateada} y para el servicio ${tipoServicio}.`;
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_CONTACTO,
            subject: 'Turno reservado exitosamente',
            text: mensaje,
        });
        console.log('Correo electrónico enviado correctamente');
    } catch (err) {
        console.error('Error al enviar correo electrónico:', err);
    }
};

app.post('/turnos/reservar', async (req, res) => {
    const { fechaHora, nombreCliente, tipoServicio, montoSeña } = req.body;

    try {
        const connection = await pool.getConnection();
        try {
            // Verificar si el turno ya existe
            const [rows] = await connection.execute('SELECT * FROM turnos WHERE fechaHora = ?', [fechaHora]);
            if (rows.length > 0) {
                return res.status(400).json({ message: 'El turno para esta fecha y hora ya está reservado' });
            }

            // Convertir montoSeña a número y verificar
            const montoSeñaNumero = Number(montoSeña);
            if (isNaN(montoSeñaNumero)) {
                throw new Error('montoSeña debe ser un número');
            }

            // Crear preferencia de pago en Mercado Pago
            let preference = {
                items: [{
                    title: `Reserva de turno: ${tipoServicio}`,
                    quantity: 1,
                    currency_id: 'ARS',
                    unit_price: montoSeñaNumero,
                }],
                payer: {
                    name: nombreCliente,
                },
                back_urls: {
                    success: `${process.env.BACKEND_URL}/turnos/confirmar`,
                    failure: `${process.env.BACKEND_URL}/turnos/error`,
                    pending: `${process.env.BACKEND_URL}/turnos/pendiente`
                },
                auto_return: 'approved',
                external_reference: fechaHora, // Usamos fechaHora como referencia externa
            };

            console.log('Preferencia creada:', preference);

            const response = await mercadopago.preferences.create(preference);

            res.status(200).json({
                message: 'Inicie el pago de la seña para confirmar la reserva',
                init_point: response.body.init_point
            });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Error al reservar el turno:', err);
        res.status(500).json({ message: 'Error interno al procesar la solicitud' });
    }
});

// Endpoint para confirmar el turno después del pago
app.get('/turnos/confirmar', async (req, res) => {
    const { payment_id, status, external_reference } = req.query;

    if (status !== 'approved') {
        return res.status(400).json({ message: 'El pago no fue aprobado' });
    }

    try {
        const connection = await pool.getConnection();
        try {
            // Insertar nuevo turno
            const [result] = await connection.execute(
                'INSERT INTO turnos (fechaHora, nombreCliente, tipoServicio) VALUES (?, ?, ?)',
                [external_reference, req.query.nombreCliente, req.query.tipoServicio]
            );

            const fechaFormateada = moment(external_reference).format('DD-MM-YYYY HH:mm');
            await enviarCorreoElectronico(req.query.nombreCliente, fechaFormateada, req.query.tipoServicio);

            res.status(201).json({ message: 'Turno reservado exitosamente' });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Error al confirmar el turno:', err);
        res.status(500).json({ message: 'Error interno al procesar la solicitud' });
    }
});

// Función para borrar turnos antiguos
const borrarTurnosAntiguos = async () => {
    try {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute(
                'DELETE FROM turnos WHERE fechaHora < NOW() - INTERVAL 1 DAY'
            );
            console.log(`Turnos borrados: ${result.affectedRows}`);
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Error al borrar turnos antiguos:', err);
    }
};

// Ejecutar la función de borrar turnos cada hora
setInterval(borrarTurnosAntiguos, 60 * 60 * 1000); // 60 minutos * 60 segundos * 1000 milisegundos

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
