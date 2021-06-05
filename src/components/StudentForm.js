import {
  faUser,
  faMailBulk,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import ToggleButtonGroupInput from "./ToggleButtonGroupInput";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import Select from "./Select";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { useState } from "react";

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

  function checkFromBeforeSubmit() {
    let isValidForm = true;
    for (const key in inputsData) {
      validationInputs({ value: inputsData[key].value, name: key });
      if (inputsData[key].errors.length !== 0) {
        isValidForm = false;
      }
    }
    return isValidForm;
  }
  function createStundetObj() {
    const student = {};
    for (const key in inputsData) {
      student[key] = inputsData[key].value;
    }
    return student;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkFromBeforeSubmit()) {
      return;
    }

    const student = createStundetObj();
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
              iconName={faUser}
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
              iconName={faMailBulk}
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
            <TextArea
              inputValue={inputsData.address.value}
              InputOnChange={InputOnChange}
              placeholderText="Street , Number , City , Zip"
              validationInputs={validationInputs}
              name={"address"}
              labelText={"Address"}
              iconName={faBuilding}
              errors={inputsData.address.errors}
              isInVaildInput={inputsData.address.validation.isInVaild}
            />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Select
              inputValue={inputsData.course.value}
              name="course"
              validationInputs={validationInputs}
              labelText="Course"
              isInVaildInput={inputsData.course.validation.isInVaild}
              iconName={faGraduationCap}
              errors={inputsData.course.errors}
              selectOptions={[
                ["", "Select Course"],
                ["JavaScript", "JavaScript"],
                ["React", "React"],
                ["Python", "Python"],
                ["Node", "Node"],
              ]}
            />
          </Col>
          <Col md="6">
            <ToggleButtonGroupInput
              inputValue={inputsData.gender.value}
              name="gender"
              validationInputs={validationInputs}
              labelText="Gender"
              isInVaildInput={inputsData.gender.validation.isInVaild}
              buttonsValue={["Male", "Female", "Other"]}
              errors={inputsData.gender.errors}
            />
          </Col>
        </Row>
        <Button className="addStudentBtn" type="submit">
          Add Student
        </Button>
      </Form>
    </Container>
  );
}
