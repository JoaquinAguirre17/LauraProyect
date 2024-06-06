import MapComponent from '../MapComponent/MapComponent'
import './ContactoComponent.css'
function ContactoComponent() {
    return (
        <>
            <h1>Contactame</h1>
            <gmp-map center="40.12150192260742,-100.45039367675781" zoom="4" map-id="DEMO_MAP_ID">
                <gmp-advanced-marker position="40.12150192260742,-100.45039367675781" title="My location"></gmp-advanced-marker>
            </gmp-map>

        </>
    )
}
export default ContactoComponent