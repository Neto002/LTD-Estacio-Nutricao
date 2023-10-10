import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import image1 from "../../assets/carroussel/cImage1.jpeg";
import image2 from "../../assets/carroussel/cImage2.jpeg";
import image3 from "../../assets/carroussel/cImage3.jpeg";
import "./style.scss";

export default function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={image1}
            className="d-block w-100 carrossel"
            alt="Primeira imagem"
          />
        </div>
        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100 carrossel"
            alt="Segunda imagem"
          />
        </div>
        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100 carrossel"
            alt="Terceira Imagem"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
