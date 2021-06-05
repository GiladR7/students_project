import {
  Form,
  ToggleButton,
  InputGroup,
  ToggleButtonGroup,
} from "react-bootstrap";

export default function ToggleButtonGroupInput({
  inputValue,
  name,
  validationInputs,
  labelText,
  isInVaildInput,
  buttonsValue,
  errors,
}) {
  return (
    <Form.Group>
      <Form.Label>{labelText}</Form.Label>
      <InputGroup hasValidation>
        <ToggleButtonGroup
          type="radio"
          name={name}
          value={inputValue}
          className={isInVaildInput ? "is-invalid" : ""}
          onChange={(e) => {
            validationInputs({ value: e, name: "gender" });
          }}
        >
          {buttonsValue.map((value, index) => {
            return (
              <ToggleButton key={index} value={value}>
                {value}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

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
