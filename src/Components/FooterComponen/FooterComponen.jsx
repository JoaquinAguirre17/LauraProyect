import './FooterComponent.css'
function FooterComponent() {
    return (
        <>
            <footer >
                <p>&copy; 2024 Lia Nails. Todos los derechos reservados.</p>
                <p>
                    <a href="/privacidad">Política de Privacidad</a> |
                    <a href="/terminos">Términos de Servicio</a> |
                    <a href="/contacto">Contacto</a>
                </p>
                <div>
                    <a href="https://www.facebook.com/tuempresa" target="_blank">Facebook</a> |
                    <a href="https://www.twitter.com/tuempresa" target="_blank">Twitter</a> |
                    <a href="https://www.instagram.com/tuempresa" target="_blank">Instagram</a>
                </div>
            </footer>
        </>
    )
}
export default FooterComponent