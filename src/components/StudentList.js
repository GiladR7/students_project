import { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";

import StudentItem from "./StudentItem";
export default function StudentList({
  showForm,
  getStudents,
  getStudent,
  sortBy,
}) {
  const [getDetails, setDetails] = useState("");

  function getUserDetails(id) {
    const [student] = getStudent(id);
    setDetails({ ...student });
  }

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Table size="sm" className="students-list-head">
            <thead className="text-center">
              <tr>
                <th colSpan="2">
                  <Button className="addBtn" onClick={() => showForm()}>
                    Add Student
                  </Button>{" "}
                  <Form.Control
                    as="select"
                    className="sort-by"
                    onChange={(e) => {
                      sortBy(e.target.value);
                    }}
                  >
                    <option>Sort By...</option>
                    <option>Name</option>
                    <option>Average</option>
                  </Form.Control>
                </th>
              </tr>
              <tr>
                <th>StundetName</th>
                <th>StudentAverage</th>
              </tr>
            </thead>
            <tbody className="student-list-body">
              {getStudents.map((stundet, index) => {
                return (
                  <tr
                    className="student-row"
                    key={index}
                    onClick={(e) => {
                      getUserDetails(stundet.id);
                    }}
                  >
                    <td>{stundet.user}</td>
                    <td>{stundet.avg}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col md={8}>
          {getDetails ? <StudentItem studentsDetails={getDetails} /> : ""}
        </Col>
      </Row>
    </Container>
  );
}