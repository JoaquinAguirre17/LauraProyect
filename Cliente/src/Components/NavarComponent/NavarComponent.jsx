import './NavarComponent.css'

function Navar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <a className="navbar-brand  " href="#">
                    <img src="../../../public/img/Logo.png" alt="Logo" />
                        <p>Lia Manicure</p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li>
                                <button>Hola</button>
                            </li>

                            <li className="nav-item">
                                <button>Hola</button>
                            </li>
                            <li className="nav-item">
                                <button>Hola</button>
                            </li>
                            <li className="nav-item">
                                <button>Hola</button>
                            </li>


                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Navar