import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function FormHeader({ closeForm }) {
  return (
    <div className="text-center form-header">
      <FontAwesomeIcon
        icon={faTimes}
        className="close-from"
        onClick={() => {
          closeForm(false);
        }}
      />
      <h4>Student Details</h4>
      <p>Hello Student! Please fill in your details </p>
    </div>
  );
}
