/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
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

  /* Creating a function to connect to the backend of the application and pass the information needed in order to
     remove an entry from the database */
  const removeCarFromDatabase = (carRegistration) => {
    axios.delete(`/delete/${carRegistration}`);
    if (carRegistration) {
      alert("The car will be removed from the database.");
    } else {
      alert("Please enter the car's Registration Number! ");
    }
  };

  return (
    <div className="RemoveCarComponentContainer">
      <img
        src={removeCarBackgroundImage}
        alt="removeCarBackgroundImage"
        className="updateCarImage"
      />
      <h1 className="removeCarComponentHeading">
        <em>
          Enter the registration number of the car you would like to remove:
        </em>{" "}
        <a href="/" className="removeCarLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      {/* Creating a form to allow the user to enter information in order to be able to
       remove a car from the database. */}
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
          <p className="removeButtonParagraph">
            <strong>
              Click the button below to remove the car from the database
            </strong>
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

/* RESOURCES USED FOR THIS BUILD: 
=====================================================================================================================
Resource 1:
===========
FULL-STACK_MEDIA-SEARCH-APP 
Created by: Luke Glendining
Link to website: https://fullstack-media-search-project.herokuapp.com/
Link to GitHub repo: https://github.com/LukeG91/fullstack-media-search-project
=====================================================================================================================

Resource 2:
===========
YouTube video:
Title of video: CRUD Tutorial Using MERN Stack - MongoDB, ReactJS, NodeJS [Part 1]
Published By: PedroTech
Date published: September 19, 2020
Link to video: https://www.youtube.com/watch?v=wgGkF4k9c7A&list=RDCMUC8S4rDRZn6Z_StJ-hh7ph8g&index=2
=====================================================================================================================

Resource 3:
===========
YouTube video:
Title of video: CRUD Tutorial Using MERN Stack - MongoDB, ReactJS, NodeJS [Part 2]
Published By: PedroTech
Date published: September 20, 2020
Link to video: https://www.youtube.com/watch?v=wnfjx65aQTw&list=RDCMUC8S4rDRZn6Z_StJ-hh7ph8g&index=3
=====================================================================================================================

Resource 4:
===========
YouTube video:
Title of video: CRUD Tutorial Using MERN Stack - MongoDB, ReactJS, NodeJS [Part 3]
Published By: PedroTech
Date published: September 27, 2020
Link to video: https://www.youtube.com/watch?v=BDfhhCbPM9U&list=RDCMUC8S4rDRZn6Z_StJ-hh7ph8g&index=1
=====================================================================================================================
*/
