import './FooterComponent.css'
function FooterComponent() {
    return (
        <>
            <footer >
                <p>&copy; 2024 Lia Nails. Todos los derechos reservados.</p>
                <p>
                    <a >Política de Privacidad</a> |
                    <a > Términos de Servicio</a> 
                    
                </p>
                <ul className="social-list">
                    <li>
                        <a href="https://www.instagram.com/lia_nails_manicure?igsh=MTJoOXN0ODdyeHk5YQ==" target="_blank"><i className="fab fa-instagram"></i> </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=543513430611&text=Hola%20buen%20d%C3%ADa%20" target="_blank"><i className="fab fa-whatsapp"></i> </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}
export default FooterComponent