import { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        fechaHora: '',
        nombreCliente: '',
        tipoServicio: '',
        montoSeña: '2000',
    });

    const servicios = {
        "Capping": 2000,
        "Esmaltado Semipermanente": 1500,
        "Soft Gel": 2500,
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
                            <label htmlFor="fechaHora">Fecha y Hora:</label>
                            <input type="datetime-local" id="fechaHora" name="fechaHora" value={formData.fechaHora} onChange={handleChange} required />
                        </div>
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
