import { Container, Row, Col, Image, Table } from "react-bootstrap";
import stundetImg from "../img/student-profile.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faBook,
  faChartBar,
  faEnvelope,
  faBuilding,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
export default function StudentItem({ studentsDetails }) {
  const icons = {
    user: faUserGraduate,
    course: faBook,
    avg: faChartBar,
    gender: faVenusMars,
    email: faEnvelope,
    address: faBuilding,
  };
  return (
    <Container fluid className="student-item-container">
      <Row>
        <Col sm={4}>
          <Image
            src={
              studentsDetails.gender === "male"
                ? `https://randomuser.me/api/portraits/men/${studentsDetails.id}.jpg`
                : studentsDetails.gender === "female"
                ? `https://randomuser.me/api/portraits/women/${studentsDetails.id}.jpg`
                : stundetImg
            }
            roundedCircle
            className="studentProfile"
          />
        </Col>
        <Col sm={8}>
          <Table responsive>
            <tbody>
              {Object.entries(studentsDetails).map(([key, value], index) => {
                return key !== "id" ? (
                  <tr key={index}>
                    <th>
                      <FontAwesomeIcon icon={icons[key]} /> {key}
                    </th>
                    <td>{value}</td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
