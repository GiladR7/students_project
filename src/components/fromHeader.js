export default function FormHeader({ closeForm }) {
  return (
    <div className="text-center form-header">
      <span onClick={closeForm} className="close-from">
        X
      </span>
      <h4>Student Details</h4>
      <p>Hello Student! Please fill in your details </p>
    </div>
  );
}
