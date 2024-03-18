import { useState } from "react";
import prato from "../../assets/alimentacao-saudavel/prato_saudavel.png";
import "./style.scss";

export default function GraficoPrato() {
  const [secaoGrafico, setSecaoGrafico] = useState(null);

  return (
    <div className="mt-5">
      {secaoGrafico === "proteinas" && (
        <div
          className="fatia-grafico fatia-proteinas px-5"
          style={{ justifyContent: "space-between" }}
        >
          <p className="w-25">
            <strong>proteína animal</strong> (carne de boi, frango, porco, peixe
            ou ovos)
          </p>
          <div className="d-flex flex-column jusify-content-center align-items-center px-3">
            <h1 className="porcentagem proteinas">25%</h1>
            <h4 className="porcentagem proteinas">Proteínas</h4>
            <br />
          </div>
          <p className="w-25">
            <strong>proteína vegetal</strong> (feijão, grão de bico, soja ou
            lentilha)
          </p>
        </div>
      )}

      {secaoGrafico === "vegetais" && (
        <div className="fatia-grafico fatia-vegetais px-5 flex-column">
          <h1 className="porcentagem vegetais">50%</h1>
          <h4 className="porcentagem vegetais">Vegetais</h4>
          <h6 className="porcentagem vegetais">crus e cozidos</h6>
        </div>
      )}

      {secaoGrafico === "carboidratos" && (
        <div className="fatia-grafico fatia-carboidratos px-5 flex-column">
          <h1 className="porcentagem carboidratos">25%</h1>
          <h4 className="porcentagem carboidratos">Carboidratos</h4>
          <h6 className="porcentagem carboidratos">de preferência integral</h6>
        </div>
      )}
      <div className="container d-flex justify-content-center position-relative w-80">
        <img className="prato" src={prato} alt="prato saudável" />
        <div
          id="proteinas"
          onMouseEnter={() => setSecaoGrafico("proteinas")}
          // onMouseLeave={() => setSecaoGrafico(null)}
        ></div>
        <div
          id="vegetais"
          onMouseEnter={() => setSecaoGrafico("vegetais")}
          // onMouseLeave={() => setSecaoGrafico(null)}
        ></div>
        <div
          id="carboidratos"
          onMouseEnter={() => setSecaoGrafico("carboidratos")}
          // onMouseLeave={() => setSecaoGrafico(null)}
        ></div>
      </div>
    </div>
  );
}
