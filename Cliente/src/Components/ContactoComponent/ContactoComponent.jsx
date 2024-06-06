import MapComponent from '../MapComponent/MapComponent'
import './ContactoComponent.css'
function ContactoComponent() {
    return (
        <>
            <h1>Contactame</h1>
            <div className='contacto'>

                <div className='maps '>
                    <h4 className='local'>Ubicacion de mi local</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.141780766186!2d-64.16698292539597!3d-31.437763497283324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2c48c6d03db%3A0x5591f430c3289a9b!2sAv.%20Revoluci%C3%B3n%20de%20Mayo%201620%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1717643840177!5m2!1ses-419!2sar"
                        allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className='contact'>
                    <h4 className='redes'>Mis Redes Sociales</h4>
                    <ul class="social-list">
                        <li>
                            <a href="https://www.instagram.com/lia_nails_manicure?igsh=MTJoOXN0ODdyeHk5YQ==" target="_blank"><i className="fab fa-instagram"></i> </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=543513430611&text=Hola%20buen%20d%C3%ADa%20" target="_blank"><i className="fab fa-whatsapp"></i> </a>
                        </li>
                    </ul>
                    <div className='horario'>
                        <h4 className='redes'>Mis Horarios</h4>
                        <ul class="horario-list">
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Lunes
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Martes
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Miercoles
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                               <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jueves
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Viernes
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sabado
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>


        </>
    )
}
export default ContactoComponent