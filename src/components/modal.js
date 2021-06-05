import Modal from "react-bootstrap/Modal";
import StudentForm from "./StudentForm";

export default function ModalLg({ lgShow, setLgShow, sendForm }) {
  return (
    <Modal
      backdrop="static"
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body>
        {" "}
        <StudentForm sendForm={sendForm} closeModal={setLgShow} />
      </Modal.Body>
    </Modal>
  );
}
