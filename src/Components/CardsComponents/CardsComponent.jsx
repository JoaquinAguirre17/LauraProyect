import './CardsComponent.css'
import HomeComponent from '../HomeComponent/HomeComponent'
function CardsComponent({titulo,img,descrip}) {
    return (
        <>
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text">{descrip}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardsComponent