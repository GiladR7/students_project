import {
  faUser,
  faMailBulk,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Row,
  Form,
  Col,
  ToggleButtonGroup,
  Button,
} from "react-bootstrap";
import TextInput from "./TextInput";
import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import FormHeader from "./fromHeader";
export default function StudentForm({ sendForm, closeModal }) {
  const [inputsData, setInputsData] = useState({
    user: {
      errors: [],
      value: "",
      validation: {
        customError: "username should be no less 2 than characters",
        required: true,
        regex: /^[\w]{2,}$/,

        isInVaild: false,
      },
    },
    email: {
      errors: [],
      value: "",
      validation: {
        customError: "invalid Email",
        required: true,
        regex: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
        isInVaild: false,
      },
    },
    address: {
      errors: [],
      value: "",
      validation: {
        customError: "Address should be no less than 10 characters.",
        required: true,
        regex: /[\w\s.,-]{10,}/,
        isInVaild: false,
      },
    },
    course: {
      errors: [],
      value: "",
      validation: {
        required: true,
        isInVaild: false,
      },
    },
    gender: {
      errors: [],
      value: "",
      validation: {
        required: true,
        isInVaild: false,
      },
    },
  });

  function validationInputs({ value, name }) {
    const errors = [];
    let isInValid = false;

    if (inputsData[name].validation.required && !value) {
      errors.push(`${name} is required field`);

      isInValid = true;
    }
    if (
      inputsData[name].validation.regex &&
      !inputsData[name].validation.regex.test(value)
    ) {
      errors.push(inputsData[name].validation.customError);

      isInValid = true;
    }

    inputsData[name].validation.isInVaild = isInValid;
    inputsData[name].errors = errors;
    inputsData[name].value = value;

    setInputsData({
      ...inputsData,
    });
  }

  function InputOnChange({ value, name }) {
    inputsData[name].value = value;
    setInputsData({
      ...inputsData,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    for (const key in inputsData) {
      validationInputs({ value: inputsData[key].value, name: key });
    }
    for (const key in inputsData) {
      if (inputsData[key].errors.length !== 0) {
        return;
      }
    }
    const student = {};
    for (const key in inputsData) {
      student[key] = inputsData[key].value;
    }
    sendForm(student);
    closeModal(false);
  };

  return (
    <Container fluid>
      <Form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <FormHeader closeForm={closeModal} />
        <Row>
          <Col md="6">
            <TextInput
              iconName={<FontAwesomeIcon icon={faUser} />}
              labelText="Username"
              inputType="text"
              placeholderData="Enter Username"
              validInput={inputsData.user.validation.isInVaild}
              name="user"
              errors={inputsData.user.errors}
              inputChange={InputOnChange}
              inputValidtion={validationInputs}
              value={inputsData.user.value}
            />
          </Col>
          <Col md="6">
            <TextInput
              iconName={<FontAwesomeIcon icon={faMailBulk} />}
              type="text"
              labelText="Email"
              placeholderData="Enter Email"
              validInput={inputsData.email.validation.isInVaild}
              name="email"
              errors={inputsData.email.errors}
              inputChange={InputOnChange}
              inputValidtion={validationInputs}
              value={inputsData.email.value}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faBuilding} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  isInvalid={inputsData.address.validation.isInVaild}
                  onBlur={(e) => {
                    validationInputs(e.target);
                  }}
                  as="textarea"
                  name="address"
                  value={inputsData.address.value}
                  rows={2}
                  placeholder={"Street , Number , City , Zip"}
                  onChange={(e) => {
                    InputOnChange(e.target);
                  }}
                />
                {inputsData.address.errors.map((error, index) => {
                  return (
                    <Form.Control.Feedback key={index} type="invalid">
                      {error}
                    </Form.Control.Feedback>
                  );
                })}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  as="select"
                  isInvalid={inputsData.course.validation.isInVaild}
                  name="course"
                  value={inputsData.course.value}
                  onChange={(e) => {
                    validationInputs(e.target);
                  }}
                >
                  <option value="">Select Course</option>
                  <option>JavaScript</option>
                  <option>React</option>
                  <option>Python</option>
                  <option>Node</option>
                </Form.Control>
                {inputsData.course.errors.map((error, index) => {
                  return (
                    <Form.Control.Feedback key={index} type="invalid">
                      {error}
                    </Form.Control.Feedback>
                  );
                })}
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <InputGroup hasValidation>
                <ToggleButtonGroup
                  type="radio"
                  name="gender"
                  value={inputsData.gender.value}
                  className={
                    inputsData.gender.validation.isInVaild ? "is-invalid" : ""
                  }
                  onChange={(e) => {
                    validationInputs({ value: e, name: "gender" });
                  }}
                >
                  <ToggleButton value="Male">Male</ToggleButton>
                  <ToggleButton value="Female">Female</ToggleButton>
                  <ToggleButton value="Other">Other </ToggleButton>
                </ToggleButtonGroup>

                {inputsData.gender.errors.map((error, index) => {
                  return (
                    <Form.Control.Feedback key={index} type="invalid">
                      {error}
                    </Form.Control.Feedback>
                  );
                })}
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Button className="addStudentBtn" type="submit">
          Add Student
        </Button>
      </Form>
    </Container>
  );
}
