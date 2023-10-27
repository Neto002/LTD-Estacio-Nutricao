import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import imagemLacos from "../../assets/lacos_campanhas.jpg";
import "./style.scss";

export default function CalendarioColorido() {
  return (
    <div className="container">
      <h1>Ações</h1>
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={imagemLacos}
          alt="calendário colorido"
          className="calendario-img"
        />
      </div>
      lista com todos os meses e quais campanhas são realizadas em cada um
    </div>
  );
}
