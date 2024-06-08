import { useState } from 'react';
import axios from 'axios';
import './From.css';

function Form() {
    const [formData, setFormData] = useState({
        fecha: '',
        hora: '',
        nombreCliente: '',
        tipoServicio: '',
        montoSeña: '',
    });

    const servicios = {
        "Capping": 3750,
        "Esmaltado Semipermanente": 3000,
        "Soft Gel": 4400,
    };

    const horariosDisponibles = {
        "Lunes": ["09:00", "11:30", "13:30", "17:30"],
        "Martes": ["09:00", "11:30", "15:00", "18:00"],
        "Miércoles": ["09:00", "11:03", "13:30", "17:30"],
        "Jueves": ["09:00", "11:30", "15:00", "18:00"],
        "Viernes": ["09:00", "11:30", "13:00", "15:00", "18:00"],
        "Sabado": ["10:00", "12:30", "15:00"]
        // Otros días y horarios según tu disponibilidad
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleServicioChange = (servicio) => {
        setFormData({
            ...formData,
            tipoServicio: servicio,
            montoSeña: servicios[servicio]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/turnos/reservar', formData);
            console.log(response.data);
            alert('Reserva creada. Inicie el pago para confirmar.');
            window.location.href = response.data.init_point; // Redirige a la URL de pago
        } catch (error) {
            console.error('Error al reservar el turno:', error);
            alert('Error al reservar el turno. Por favor, inténtelo de nuevo.');
        }
    };

    return (
        <>
            <div className='formulario'>
                <div className="form-container">
                    <h2>Reservar Turno</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fecha">Fecha:</label>
                            <select id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required>
                                <option value="">Selecciona un día</option>
                                {Object.keys(horariosDisponibles).map((dia) => (
                                    <option key={dia} value={dia}>{dia}</option>
                                ))}
                            </select>
                        </div>
                        {formData.fecha && (
                            <div>
                                <label htmlFor="hora">Hora:</label>
                                <select id="hora" name="hora" value={formData.hora} onChange={handleChange} required>
                                    <option value="">Selecciona una hora</option>
                                    {horariosDisponibles[formData.fecha].map((hora) => (
                                        <option key={hora} value={hora}>{hora}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <div>
                            <label htmlFor="nombreCliente">Nombre:</label>
                            <input type="text" id="nombreCliente" name="nombreCliente" value={formData.nombreCliente} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Tipo de Servicio:</label>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    {formData.tipoServicio || "Selecciona un servicio"}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {Object.keys(servicios).map((servicio) => (
                                        <li key={servicio} onClick={() => handleServicioChange(servicio)} className="dropdown-item">
                                            {servicio}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="montoSeña">Monto de la Seña:</label>
                            <input type="number" id="montoSeña" name="montoSeña" value={formData.montoSeña} readOnly />
                        </div>
                        <button type="submit">Reservar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
