/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React, { useState } from "react";
import axios from "axios";
import updateBackgroundImage from "../images/updateBackgroundImage.jpg";
import "../App.css";

function Update() {
  /* Setting state. */
  const [carModel, setCarModel] = useState(0);
  const [carMake, setCarMake] = useState("");
  const [carColour, setCarColour] = useState("");
  const [carRegistration, setCarRegistration] = useState("");
  const [carOwner, setCarOwner] = useState("");
  const [ownersAddress, setOwnersAddress] = useState("");

  /* Creating event handlers to capture the data that the user enters and store the data in state. */
  const aupdateCarModel = (e) => {
    const modelOfCar = e.target.value;
    setCarModel(modelOfCar);
    console.log(carModel);
  };

  const updateCarMake = (e) => {
    const makeOfCar = e.target.value;
    setCarMake(makeOfCar);
    console.log(carMake);
  };

  const updateCarColour = (e) => {
    const colourOfCar = e.target.value;
    setCarColour(colourOfCar);
    console.log(carColour);
  };

  const updateCarRegistration = (e) => {
    const carReg = e.target.value;
    setCarRegistration(carReg);
    console.log(carRegistration);
  };

  const updateCarOwner = (e) => {
    const owner = e.target.value;
    setCarOwner(owner);
    console.log(carOwner);
  };

  const updateOwnersAddress = (e) => {
    const address = e.target.value;
    setOwnersAddress(address);
    console.log(ownersAddress);
  };

  /* Creating a function to take the new values that the user has entered and connect to the
     backend of the application and make a PUT(update) request to the database to update the relevant 
     entry in the database. */
  const updateCarItem = () => {
    axios
      .put("/update", {
        updatedModel: carModel,
        updatedMake: carMake,
        updatedColour: carColour,
        registrationNumber: carRegistration,
        updatedOwner: carOwner,
        updatedAddress: ownersAddress,
      })
      .catch((error) => {
        console.log(
          "An error occured, the record was not updated, error is: " + error
        );
      });
    /* Adding an if statement for validation */
    if (carRegistration) {
      alert("The record has been updated successfully!");
    } else {
      alert("Please enter the cars Registration Number.");
    }
  };

  return (
    <div className="updateCarComponentContainer">
      <img
        src={updateBackgroundImage}
        alt="updateBackgroundImage"
        className="updateCarImage"
      />
      <h1 className="updateCarComponentHeading">
        <em>Fill in the form below to update a car in the database:</em>{" "}
        <a href="/" className="updateLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      {/* Creating a form to allow the user to enter new information in order to be able to
          update a car that is stored in the database. */}
      <div className="updateFormContainer">
        <p className="updateInstructionParagraph">
          <strong>
            Please ensure that the Registration Number is correct as the update
            will fail if the Registration Number is incorrect
          </strong>
        </p>
        <label>
          <strong>Model:</strong>
        </label>
        <input
          type="number"
          className="updateCarInput"
          onChange={aupdateCarModel}
        />
        <label>
          <strong>Make:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarMake}
        />
        <label>
          <strong>Colour:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarColour}
        />
        <label>
          <strong>Registration:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarRegistration}
        />
        <label>
          <strong>Owner:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarOwner}
        />
        <label>
          <strong>Address:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateOwnersAddress}
        />
        <br />
        <div className="updateCarMessageAndButtonContainer">
          <p className="updateCarMessageAndButtonContainerParagraph">
            <strong>
              Click the button below to update a car in the database
            </strong>
          </p>
          <button className="updateCarButton" onClick={updateCarItem}>
            UPDATE CAR ITEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;

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
