import { useState } from 'react';
import axios from 'axios';
import './From.css'

function Form() {
    const [formData, setFormData] = useState({
        fechaHora: '',
        nombreCliente: '',
        tipoServicio: '',
        montoSeña: '2000',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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
                           
                            
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="tipoServicio" name="tipoServicio" value={formData.tipoServicio} onChange={handleChange} required>
                                    Tipo de servicio
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Capping</a></li>
                                    <li><a class="dropdown-item" href="#">Esmaltado Semipermanente</a></li>
                                    <li><a class="dropdown-item" href="#">Soft Gel</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="montoSeña">Monto de la Seña:</label>
                            <input type="number" id="montoSeña" name="montoSeña" value={formData.montoSeña} onChange={handleChange} required />
                        </div>
                        <button type="submit">Reservar</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
