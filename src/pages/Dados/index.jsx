import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DadosCard from "../../components/DadosCard";
import DadosModal from "../../components/DadosModal";
import "./style.scss";

export default function Dados() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const pageBody = document.getElementById("pageBody");
    console.log(modalShow);
    if (modalShow) {
      if (pageBody) {
        pageBody.classList.add("modal-open");
      }
    } else {
      pageBody.classList.remove("modal-open");
    }
    // const pageBody = document.getElementById("pageBody");
    // if (pageBody) {
    //   pageBody.classList.add("modal-open");
    // }
    // return () => {
    //   if (pageBody) {
    //     pageBody.classList.remove("modal-open");
    //   }
    // };
  }, [modalShow]);

  return (
    <div id="pageBody" className="container">
      <h1>Dados dos Atendimentos</h1>
      <div className="cards">
        <div className="card-dados">
          <DadosCard
            cardTitle="Dia 08/09/21"
            cardText={
              "Clique no botão abaixo para visualizar os detalhes do atendimento"
            }
            cardBody={
              <div>
                <Button variant="info" onClick={() => setModalShow(true)}>
                  Visualizar
                </Button>
                <DadosModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalTitle="Realizados três atendimentos"
                  modalBody={
                    <>
                      <ol>
                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 36 anos, com hemoglobina glicada
                            limítrofe de 5,9, sem histórico de patologia
                            pregressa.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            28,2 kg/m² (Sobrepeso)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Reeducação alimentar e perder peso.
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 59 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            32 kg/m² (Obesidade grau I)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perder peso
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 31 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            35 kg/m² (Obesidade grau II)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perda de peso
                          </p>
                        </li>
                      </ol>
                    </>
                  }
                />
              </div>
            }
          />
        </div>
        <div className="card-dados">
          <DadosCard
            cardTitle="Dia 08/09/21"
            cardText={
              "Clique no botão abaixo para visualizar os detalhes do atendimento"
            }
            cardBody={
              <div>
                <Button variant="info" onClick={() => setModalShow(true)}>
                  Visualizar
                </Button>
                <DadosModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalTitle="Realizados três atendimentos"
                  modalBody={
                    <>
                      <ol>
                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 36 anos, com hemoglobina glicada
                            limítrofe de 5,9, sem histórico de patologia
                            pregressa.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            28,2 kg/m² (Sobrepeso)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Reeducação alimentar e perder peso.
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 59 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            32 kg/m² (Obesidade grau I)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perder peso
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 31 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            35 kg/m² (Obesidade grau II)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perda de peso
                          </p>
                        </li>
                      </ol>
                    </>
                  }
                />
              </div>
            }
          />
        </div>
        <div className="card-dados">
          <DadosCard
            cardTitle="Dia 08/09/21"
            cardText={
              "Clique no botão abaixo para visualizar os detalhes do atendimento"
            }
            cardBody={
              <div>
                <Button variant="info" onClick={() => setModalShow(true)}>
                  Visualizar
                </Button>
                <DadosModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalTitle="Realizados três atendimentos"
                  modalBody={
                    <>
                      <ol>
                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 36 anos, com hemoglobina glicada
                            limítrofe de 5,9, sem histórico de patologia
                            pregressa.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            28,2 kg/m² (Sobrepeso)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Reeducação alimentar e perder peso.
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 59 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            32 kg/m² (Obesidade grau I)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perder peso
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 31 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            35 kg/m² (Obesidade grau II)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perda de peso
                          </p>
                        </li>
                      </ol>
                    </>
                  }
                />
              </div>
            }
          />
        </div>
        <div className="card-dados">
          <DadosCard
            cardTitle="Dia 08/09/21"
            cardText={
              "Clique no botão abaixo para visualizar os detalhes do atendimento"
            }
            cardBody={
              <div>
                <Button variant="info" onClick={() => setModalShow(true)}>
                  Visualizar
                </Button>
                <DadosModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalTitle="Realizados três atendimentos"
                  modalBody={
                    <>
                      <ol>
                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 36 anos, com hemoglobina glicada
                            limítrofe de 5,9, sem histórico de patologia
                            pregressa.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            28,2 kg/m² (Sobrepeso)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Reeducação alimentar e perder peso.
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 59 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            32 kg/m² (Obesidade grau I)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perder peso
                          </p>
                        </li>

                        <li>
                          <h5>Paciente</h5>
                          <p>
                            Sexo feminino, 31 anos, sem história de patologia
                            pregressa e atual.
                          </p>
                          <p>
                            <span>
                              <strong>IMC:</strong>
                            </span>{" "}
                            35 kg/m² (Obesidade grau II)
                          </p>
                          <p>
                            <span>
                              <strong>Objetivo da consulta:</strong>
                            </span>{" "}
                            Perda de peso
                          </p>
                        </li>
                      </ol>
                    </>
                  }
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
