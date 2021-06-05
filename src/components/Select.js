import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Select({
  inputValue,
  name,
  validationInputs,
  labelText,
  isInVaildInput,
  iconName,
  errors,
  selectOptions,
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
          as="select"
          isInvalid={isInVaildInput}
          name={name}
          value={inputValue}
          onChange={(e) => {
            validationInputs(e.target);
          }}
        >
          {selectOptions.map(([value, text], index) => {
            return (
              <option key={index} value={value}>
                {text}
              </option>
            );
          })}
        </Form.Control>
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
