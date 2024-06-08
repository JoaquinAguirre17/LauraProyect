import './CarruselComponent.css'
function CarruselComponent() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../../public/img/carrusel1.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel2.jpg" class="d-block  " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel3.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel4.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel5.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel6.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel7.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel8.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel9.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel10.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel11.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel12.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel13.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel14.jpg" class="d-block " alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../../../../public/img/carrusel15.jpg" class="d-block " alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default CarruselComponent