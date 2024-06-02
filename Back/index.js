const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const pool = require('./db');
const moment = require('moment');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

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
    const { fechaHora, nombreCliente, tipoServicio } = req.body;

    try {
        const connection = await pool.getConnection();
        try {
            // Verificar si el turno ya existe
            const [rows] = await connection.execute('SELECT * FROM turnos WHERE fechaHora = ?', [fechaHora]);
            if (rows.length > 0) {
                return res.status(400).json({ message: 'El turno para esta fecha y hora ya está reservado' });
            }

            // Insertar nuevo turno
            await connection.execute(
                'INSERT INTO turnos (fechaHora, nombreCliente, tipoServicio) VALUES (?, ?, ?)',
                [fechaHora, nombreCliente, tipoServicio]
            );

            const fechaFormateada = moment(fechaHora).format('DD-MM-YYYY HH:mm');
            await enviarCorreoElectronico(nombreCliente, fechaFormateada, tipoServicio);

            res.status(201).json({ message: 'Turno reservado exitosamente' });
        } finally {
            connection.release();
        }
    } catch (err) {
        console.error('Error al reservar el turno:', err);
        res.status(500).json({ message: 'Error interno al procesar la solicitud' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
