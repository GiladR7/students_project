import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import {
  getStudents,
  getStudent,
  addStudent,
  getSortOrUnSortArr,
} from "./DAL/api";
import StudentList from "./components/StudentList";

import ModalLg from "./components/modal";
import { useState } from "react";
let currentSortBy;
function App() {
  const [lgShow, setModalShow] = useState(false);
  const [students, setStudents] = useState(() => {
    return getStudents();
  });

  function sendStudentDetails(student) {
    addStudent(student);
    const newStudents = getSortOrUnSortArr(currentSortBy);
    setStudents([...newStudents]);
  }

  function openAndCloseModel(isOpen) {
    setModalShow(isOpen);
  }
  function sortBy(value) {
    currentSortBy = value;
    setStudents([...getSortOrUnSortArr(value)]);
  }
  return (
    <Container fluid className="main">
      <ModalLg
        lgShow={lgShow}
        setLgShow={openAndCloseModel}
        sendForm={sendStudentDetails}
      ></ModalLg>

      <StudentList
        getStudents={students}
        getStudent={getStudent}
        sortBy={sortBy}
        openModal={openAndCloseModel}
      />
    </Container>
  );
}

export default App;
