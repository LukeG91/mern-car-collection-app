import React, { useState } from "react";
import axios from "axios";
import removeCarBackgroundImage from "../images/removeACarBackground.jpg";
import "../App.css";

function RemoveCar() {
  /* Setting state */
  const [carRegistration, setCarRegistration] = useState("");

  /* Creating an event handler to capture the registration number that the user enters and set it in state. */

  const obtainRegistrationNumber = (e) => {
    const registration = e.target.value;
    setCarRegistration(registration);
    console.log(carRegistration);
  };

  /* Creating a function to remove an entry from the database */

  const removeCarFromDatabase = (carRegistration) => {
    axios.delete(`/delete/${carRegistration}`);
  };

  return (
    /* Creating the form to allow the user to add a new car to the database. */
    <div className="RemoveCarComponentContainer">
      <img
        src={removeCarBackgroundImage}
        alt="removeCarBackgroundImage"
        className="updateCarImage"
      />
      <h1 className="removeCarComponentHeading">
        <em>Enter the registration number of the car you want to remove:</em>{" "}
        <a href="/" className="removeCarLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      <div className="removeCarFormContainer">
        <label>
          <strong>Registration:</strong>
        </label>
        <input
          type="text"
          className="removeCarInput"
          onChange={obtainRegistrationNumber}
        />
        <br />
        <div className="updateCarMessageAndButtonContainer">
          <p>
            <strong>
              Click the button below to remove the car from the database.
            </strong>{" "}
          </p>
          <button
            className="updateCarButton"
            onClick={() => removeCarFromDatabase(carRegistration)}
          >
            REMOVE CAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveCar;
