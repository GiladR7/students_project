import Input from "./input";
import {
  faUser,
  faMailBulk,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function AddStudent() {
  const [inputsData, setInputsData] = useState({
    user: {
      errors: [],
      value: "",
      validation: {
        customError: "username should be no less than characters",
        required: true,
        regex: /^[\w\d]{2,}$/,
      },
    },
    email: {},
    address: {},
    course: {},
  });
  return (
    <form className="container-xl addStudent">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-6">
            <Input
              type="text"
              labelText="Username"
              id="user"
              iconName={faUser}
            />
          </div>
          <div className="col-md-6">
            <Input
              type="email"
              labelText="Email"
              id="email"
              iconName={faMailBulk}
            />
          </div>
        </div>

        <Input
          iconName={faBuilding}
          type="text"
          labelText="Address"
          id="address"
        />

        <div className="row">
          <div className="col-md-6">
            <div className="my-1">
              <label htmlFor="course">Course</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                </div>
                <select id="course" class="form-control">
                  <option>Select Course</option>
                  <option>JavaScript</option>
                  <option>Pythone</option>
                  <option>React</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="my-1">
              <label htmlFor="gender">Gender</label>
              <div className="input-group">
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="female"
                    name="customRadioInline"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="female">
                    Female
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="male"
                    name="customRadioInline"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="male">
                    Male
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="other"
                    name="customRadioInline"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-group mt-3">
        <button type="submit" class="btn btn-primary form-control">
          Submit
        </button>
      </div>
    </form>
  );
}
