import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavDropdown } from "react-bootstrap";
import "./style.scss";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top barra-navegacao"
      data-bs-theme="light"
      style={{ marginBottom: "1vh" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Computação / Nutrição
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="/combate-tabagismo">
                Combate ao Tabagismo
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="comunidade">
                Comunidade
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="perfil-pacientes">
                Perfil de Pacientes
              </a>
            </li>
            <li className="nav-item item">
              <a className="nav-link" href="dados">
                Dados
              </a>
            </li>
            <NavDropdown title="Mais" id="basic-nav-dropdown" className="item">
              <NavDropdown.Item href="/calendario-colorido">
                Ações
              </NavDropdown.Item>
              <NavDropdown.Item href="/dez-passos">
                Alimentação Saudável
              </NavDropdown.Item>
              <NavDropdown.Item href="/prato-saudavel">
                Prato Saudável
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  );
}
