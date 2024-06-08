import './FooterComponent.css'
function FooterComponent() {
    return (
        <>
            <footer class="footer">
                <p>&copy; 2024 Lia Nails. Todos los derechos reservados.</p>
                <p>
                    <a class="footer-link">Política de Privacidad</a> |
                    <a class="footer-link">Términos de Servicio</a>
                </p>
                <h4>Lia Manicure</h4>
                <ul class="social-list">
                    <li>
                        <a href="https://www.instagram.com/lia_nails_manicure?igsh=MTJoOXN0ODdyeHk5YQ==" target="_blank" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=543513430611&text=Hola%20buen%20d%C3%ADa%20" target="_blank" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
                <h4>Diseñado por:</h4>
                <ul class="contact-list">
                    <p class="contact-name">Joaquin Aguirre</p>
                    <li class="contact-item">

                        <a href="https://api.whatsapp.com/send?phone=+5493544443919&text=Hola%20buen%20d%C3%ADa%20" target="_blank" class="contact-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/joaquinaguirre17?igsh=MTVnaXhhNjFneHJrcw==" target="_blank" class="contact-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <p class="contact-name">David Arce</p>
                    <li class="contact-item">

                        <a href="https://www.instagram.com/david_lbe_37?igsh=b2sxNGYwcTIxcjR4" target="_blank" class="contact-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+5493517050225&text=Hola%20buen%20d%C3%ADa%20" target="_blank" class="contact-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </footer>

        </>
    )
}
export default FooterComponent