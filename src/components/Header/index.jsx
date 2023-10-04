import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
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
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/combate-tabagismo">
                Combate ao Tabagismo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="comunidade">
                Comunidade
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="perfil-pacientes">
                Perfil de Pacientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="dados">
                Dados
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
