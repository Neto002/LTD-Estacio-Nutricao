// import "bootstrap/dist/css/bootstrap.css";
// import "./style.scss";

// export default function Footer() {
//   return (
//     <footer className="text-center text-lg-start text-muted">
//       <div className="text-center p-4 rodape">
//         © 2023 Copyright: Computação / Nutrição
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./style.scss";

export default function Footer() {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <Navbar fixed="bottom" variant="light" className="rodape">
        <Container id="footerText">
          {/* <Navbar.Brand> */}
          <p>© 2023 Copyright: Computação / Nutrição</p>
          {/* </Navbar.Brand> */}
        </Container>
      </Navbar>
    </div>
  );
}
