import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DadosCard from "../../components/DadosCard";
import DadosModal from "../../components/DadosModal";
import api from "../../services/api";
import "./style.scss";

export default function Dados() {
  const [modalShow, setModalShow] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadDados() {
      return await api
        .get("dados")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((e) => {
          console.log(e);
          setData([]);
        });
    }
    loadDados();
  }, []);

  return (
    <div id="pageBody" className="container">
      <h1 className="text-center">Dados dos Atendimentos</h1>
      <div className="cards d-flex justify-content-center">
        {data.length < 1 && <p>Carregando dados dos atendimentos...</p>}
        {data.map((atendimento, index) => (
          <div key={atendimento.date}>
            <div className="card-dados">
              <DadosCard
                cardTitle={atendimento.date}
                cardText={
                  "Clique no botão abaixo para visualizar os detalhes do atendimento"
                }
                cardBody={
                  <div>
                    <Button variant="info" onClick={() => setModalShow(index)}>
                      Visualizar
                    </Button>
                  </div>
                }
              />
            </div>
            <DadosModal
              show={modalShow === index}
              onHide={() => setModalShow(null)}
              modalTitle={atendimento.date}
              modalBody={
                <>
                  <h4 style={{ whiteSpace: "pre-line" }}>
                    {atendimento.title}
                  </h4>
                  <br />
                  <ol>
                    {atendimento.atendimentos.map((infoAtendimentos) => (
                      <li key={infoAtendimentos.description}>
                        <h5>{infoAtendimentos.title}</h5>
                        <p>{infoAtendimentos.description}</p>
                        <p>
                          <span>
                            <strong>IMC:</strong>
                          </span>{" "}
                          {infoAtendimentos.imc}
                        </p>
                        <p>
                          <span>
                            <strong>Objetivo da consulta:</strong>
                          </span>{" "}
                          {infoAtendimentos.objective}
                        </p>
                        {infoAtendimentos.conduct != null && (
                          <p>
                            <span>
                              <strong>Conduta:</strong>
                            </span>{" "}
                            {infoAtendimentos.conduct}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
