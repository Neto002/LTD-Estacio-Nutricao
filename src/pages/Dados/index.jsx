import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DadosCard from "../../components/DadosCard";
import DadosModal from "../../components/DadosModal";
import "./style.scss";

export default function Dados() {
  const [modalShow, setModalShow] = useState(null);
  const [data, setData] = useState([
    {
      date: "Dia 08/09/21",
      title: "Realizados três atendimentos",
      atendimentos: [
        {
          title: "Paciente",
          description:
            "Sexo feminino, 36 anos, com hemoglobina glicada limítrofe de 5,9, sem histórico de patologia pregressa.",
          imc: "28,2 kg/m² (Sobrepeso)",
          objective: "Reeducação alimentar e perder peso.",
          conduct: null,
        },
        {
          title: "Paciente",
          description:
            "Sexo feminino, 59 anos, sem história de patologia pregressa e atual.",
          imc: "32 kg/m² (Obesidade grau I)",
          objective: "Perder peso",
          conduct: null,
        },
        {
          title: "Paciente",
          description:
            "Sexo feminino, 31 anos, sem história de patologia pregressa e atual.",
          imc: "35 kg/m² (Obesidade grau II)",
          objective: "Perda de peso",
          conduct: null,
        },
      ],
    },
    {
      date: "Dia: 15/09/21",
      title: "Realizados dois atendimentos",
      atendimentos: [
        {
          title: "Paciente",
          description:
            "Sexo feminino, 61 anos, hipertensa, fazendo uso de medicamentos hipertensivos há 7 anos.",
          imc: "28,55 kg/m² (Sobrepeso)",
          objective: "Perder peso.",
          conduct:
            "A mesma recebeu orientações e folhetos informativos específicos para hipertensos e orientamos qualitativamente como deve ser sua alimentação.",
        },
        {
          title: "Paciente",
          description:
            "Sexo feminino, 32 anos, sem história de patologia pregressa e atual, desejava perder peso.",
          imc: "31,8 kg/m² (Obesidade grau I)",
          objective: "Perder peso",
          conduct:
            "Foram feitas orientações qualitativas para reeducação alimentar. Reagendamos as duas pacientes para retorno daqui a 15 dias.",
        },
      ],
    },
    {
      date: "Dia: 22/09/21",
      title:
        "Realizamos uma reunião com a coordenadora do Curso de Nutrição, para organizar os materiais (folder, panfletos...) para serem distribuídos na instituição com intuito de promover a educação alimentar e nutricional.\n\nRealizamos dois atendimentos, uma paciente primeira vez e outro retorno.",
      atendimentos: [
        {
          title: "Paciente",
          description:
            "Sexo feminino, 61 anos, hipertensa, fazendo uso de medicamentos hipertensivos há 7 anos.",
          imc: "28,55 kg/m² (Sobrepeso)",
          objective: "Perder peso.",
          conduct:
            "A mesma recebeu orientações e folhetos informativos específicos para hipertensos e orientamos qualitativamente como deve ser sua alimentação.",
        },
        {
          title: "Paciente",
          description:
            "Sexo feminino, 32 anos, sem história de patologia pregressa e atual, desejava perder peso.",
          imc: "31,8 kg/m² (Obesidade grau I)",
          objective: "Perder peso",
          conduct:
            "Foram feitas orientações qualitativas para reeducação alimentar. Reagendamos as duas pacientes para retorno daqui a 15 dias.",
        },
      ],
    },
    {
      date: "Dia: 29/09/21",
      title:
        "Realizados três atendimentos, uma delas retorno para entrega do plano alimentar entregue seu plano alimentar.",
      atendimentos: [
        {
          title: "Paciente",
          description:
            "Sexo feminino, 54 anos, hipertensa diagnosticada há 4 anos, faz uso de hipertensivo.",
          imc: "31 kg/m² (Obesidade grau I)",
          objective: "Perder peso.",
          conduct: null,
        },
        {
          title: "Paciente",
          description:
            "Sexo feminino, 92 anos, com hipertensão e tendência a entupimento de carótida.",
          imc: "23,76 kg/m² (eutrofia)",
          objective: "Adequações nutricionais",
          conduct:
            "Foram realizadas orientações qualitativas para hipertensão, constipação e baixo teor de lipídios.",
        },
      ],
    },
  ]);

  // useEffect(() => {
  //   async function loadDados() {
  //     return await api
  //       .get("dados")
  //       .then((response) => {
  //         console.log(response.data);
  //         setData(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //         setData([]);
  //       });
  //   }
  //   loadDados();
  // }, []);

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
