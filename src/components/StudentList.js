import { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";

import StudentItem from "./StudentItem";
export default function StudentList({
  getStudents,
  getStudent,
  sortBy,
  openModal,
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
          <Table borderless className="students-list-head">
            <thead className="text-center">
              <tr>
                <th>
                  <Button variant="info" onClick={() => openModal(true)}>
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
                  </Form.Control>
                </th>
              </tr>
              <tr>
                <th>StundetName</th>
              </tr>
            </thead>
            <tbody className="student-list-body">
              {getStudents.length === 0 ? (
                <tr className="student-row">
                  <td>No Students to Show</td>
                </tr>
              ) : (
                getStudents.map((stundet, index) => {
                  return (
                    <tr
                      className="student-row"
                      key={index}
                      onClick={() => {
                        getUserDetails(stundet.id);
                      }}
                    >
                      <td>{stundet.user}</td>
                    </tr>
                  );
                })
              )}
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
