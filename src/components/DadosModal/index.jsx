import { Modal } from "react-bootstrap";
import "./style.scss";

export default function DadosModal(props) {
  //   useEffect(() => {
  //     const pageContainer = document.getElementById("page-container");
  //     if (pageContainer) {
  //       pageContainer.classList.add("modal-open");
  //     }
  //     return () => {
  //       if (pageContainer) {
  //         pageContainer.classList.remove("modal-open");
  //       }
  //     };
  //   }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.modalBody}</Modal.Body>
    </Modal>
  );
}
