import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentForm from "./components/StudentForm";
import Container from "react-bootstrap/Container";
import { getStudents, getStudent, addStudent } from "./DAL/api";
import StudentList from "./components/StudentList";
import { useState } from "react";
let currentSortBy;
function App() {
  const [fromDisplay, setFromDispaly] = useState(false);
  const [students, setStudents] = useState(() => {
    return getStudents();
  });
  function sortByName(a, b) {
    const name1 = a.user.toLocaleLowerCase();
    const name2 = b.user.toLocaleLowerCase();
    if (name1 > name2) {
      return 1;
    } else if (name2 > name1) {
      return -1;
    } else {
      return 0;
    }
  }
  function showForm() {
    setFromDispaly(!fromDisplay);
  }

  function sendStudentDetails(student) {
    addStudent(student);
    const newStudents = [...students, student];
    if (currentSortBy === "Name") {
      newStudents.sort(sortByName);
    } else if (currentSortBy === "Average") {
      newStudents.sort((a, b) => {
        return b.avg - a.avg;
      });
    }
    setStudents(newStudents);
  }

  function sortBy(value) {
    currentSortBy = value;
    if (value === "Name") {
      students.sort(sortByName);
    } else if (value === "Average") {
      students.sort((a, b) => {
        return b.avg - a.avg;
      });
    }
    setStudents([...students]);
  }
  return (
    <Container fluid className="main">
      {fromDisplay ? (
        <StudentForm sendFrom={sendStudentDetails} closeForm={showForm} />
      ) : (
        ""
      )}
      <StudentList
        showForm={showForm}
        getStudents={students}
        getStudent={getStudent}
        sortBy={sortBy}
      />
    </Container>
  );
}

export default App;
