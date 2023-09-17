import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.scss";

import hamburguer from "../../assets/hamburguer.jpeg";
import massas from "../../assets/massas.jpeg";
import pratos from "../../assets/pratos.jpeg";

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
            src={hamburguer}
            className="d-block w-100 carrossel"
            alt="Primeira imagem"
          />
        </div>
        <div className="carousel-item">
          <img
            src={massas}
            className="d-block w-100 carrossel"
            alt="Segunda imagem"
          />
        </div>
        <div className="carousel-item">
          <img
            src={pratos}
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
