import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TextArea({
  placeholderText,
  inputValue,
  name,
  validationInputs,
  labelText,
  isInVaildInput,
  iconName,
  InputOnChange,
  errors,
}) {
  return (
    <Form.Group>
      <Form.Label>{labelText}</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <FontAwesomeIcon icon={iconName} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          isInvalid={isInVaildInput}
          onBlur={(e) => {
            validationInputs(e.target);
          }}
          as="textarea"
          name={name}
          value={inputValue}
          rows={2}
          placeholder={placeholderText}
          onChange={(e) => {
            InputOnChange(e.target);
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
