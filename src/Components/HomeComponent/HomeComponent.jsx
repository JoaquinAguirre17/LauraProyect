import CardsComponent from "../CardsComponents/CardsComponent"
import './HomeComponent.css'
function HomeComponent() {
    return (
        <>
            <div className="Cards">
                <CardsComponent titulo={'Semipermanete Esmaltado'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Capping'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Naturales'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Softgel'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Francesitas'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Nail Art'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />

                <CardsComponent titulo={'Brillos y polvos'} img={'../../../../public/img/img.jpg'}
                    descrip={'dhksjahdkjashdkjsahkdjhaskjhdfkjashfjkshafkjhkjfhjkHFKJHDKJHAFGKJDHGKJHADKJGHDJKSGHJKADSGHKJADSHGJKASDHGKJAHSDGKJHASDJK'} />
            </div>

            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../../public/img/img.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/img/Fondo.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/img/img.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default HomeComponent