import BotonComponent from '../BotonComponent/BontonComponent'
import './NavarComponent.css'

function Navar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
<<<<<<< HEAD:src/Components/NavarComponent/NavarComponent.jsx
                    <a className="navbar-brand  " href="#">
                        <img src="../../../public/img/Logo.png" alt="Logo" />
=======
                    <a className="navbar-brand  " href="../../App.jsx">
                    <img src="../../../public/img/Logo.png" alt="Logo" />
>>>>>>> dbf03c0a0b612d4e60087011091af5620d641ca2:Cliente/src/Components/NavarComponent/NavarComponent.jsx
                        <p>Lia Manicure</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li>
                                <BotonComponent ruta={'/'} nombre={'Home'} />
                            </li>

                            <li className="nav-item">
                                <BotonComponent ruta={'/Contacto'} nombre={'Contacto'} />
                            </li>
                            <li className="nav-item">
                                <BotonComponent ruta={'/Turnos'} nombre={'Turnos'} />
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Navar