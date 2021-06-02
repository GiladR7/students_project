import Modal from "react-bootstrap/Modal";
import StudentForm from "./StudentForm";
export default function ModalLg({ lgShow, setLgShow, sendForm }) {
  return (
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Add New Student
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <StudentForm sendForm={sendForm} closeModal={setLgShow} />
      </Modal.Body>
    </Modal>
  );
}
