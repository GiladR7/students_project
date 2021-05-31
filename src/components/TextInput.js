import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function TextInput({
  errors,
  iconName,
  inputType,
  labelText,
  placeholderData,
  name,
  validInput,
  value,
  inputChange,
  inputValidtion,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{labelText}</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Prepend>
          <InputGroup.Text>{iconName}</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type={inputType}
          isInvalid={validInput}
          placeholder={placeholderData}
          name={name}
          value={value}
          onChange={(e) => {
            inputChange(e.target);
          }}
          onBlur={(e) => {
            inputValidtion(e.target);
          }}
        />
        {errors.map((error, index) => {
          return (
            <Form.Control.Feedback key={index} type="invalid">
              {error}
            </Form.Control.Feedback>
          );
        })}
      </InputGroup>
    </Form.Group>
  );
}
