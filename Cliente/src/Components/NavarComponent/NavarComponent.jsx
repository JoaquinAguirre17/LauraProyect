<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './NavarComponent.css';
=======
import BotonComponent from '../BotonComponent/BontonComponent'
import './NavarComponent.css'
>>>>>>> 6c34bba31357fcb86a03bd9d80a78b9cb0d66ee3

function NavarComponent() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
<<<<<<< HEAD
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
=======
                <div className="container-fluid ">

                  
                    <a className="navbar-brand  " href="../../App.jsx">
>>>>>>> 6c34bba31357fcb86a03bd9d80a78b9cb0d66ee3
                        <img src="../../../public/img/Logo.png" alt="Logo" />
                        <p>Lia Manicure</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
<<<<<<< HEAD
                        <ul className="navbar-nav">
=======
                        <ul className="navbar-nav ">
                            <li>
                                <BotonComponent ruta={'/'} nombre={'Home'} />
                            </li>

>>>>>>> 6c34bba31357fcb86a03bd9d80a78b9cb0d66ee3
                            <li className="nav-item">
                                <BotonComponent ruta={'/Contacto'} nombre={'Contacto'} />
                            </li>
                            <li className="nav-item">
                                <BotonComponent ruta={'/Turnos'} nombre={'Turnos'} />
                            </li>
<<<<<<< HEAD
                            <li className="nav-item">
                                <Link to="/form">
                                    <button>Turnos</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button>Hola</button>
                            </li>
=======
>>>>>>> 6c34bba31357fcb86a03bd9d80a78b9cb0d66ee3
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavarComponent;
