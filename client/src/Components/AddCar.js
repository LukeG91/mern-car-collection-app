/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React, { useState } from "react";
import axios from "axios";
import addCarBackgroundImage from "../images/Hilux.jpg";
import "../App.css";

function AddCar() {
  /* Setting state. */
  const [carModel, setCarModel] = useState(0);
  const [carMake, setCarMake] = useState("");
  const [carColour, setCarColour] = useState("");
  const [carRegistration, setCarRegistration] = useState("");
  const [carOwner, setCarOwner] = useState("");
  const [ownersAddress, setOwnersAddress] = useState("");

  /* Creating event handlers to capture the data that the user enters and store that data in state. */
  const addCarModel = (e) => {
    const modelOfCar = e.target.value;
    setCarModel(modelOfCar);
    console.log(carModel);
  };

  const addCarMake = (e) => {
    const makeOfCar = e.target.value;
    setCarMake(makeOfCar);
    console.log(carMake);
  };

  const addCarColour = (e) => {
    const colourOfCar = e.target.value;
    setCarColour(colourOfCar);
    console.log(carColour);
  };

  const addcarRegistration = (e) => {
    const carReg = e.target.value;
    setCarRegistration(carReg);
    console.log(carRegistration);
  };

  const addCarOwner = (e) => {
    const owner = e.target.value;
    setCarOwner(owner);
    console.log(carOwner);
  };

  const addOwnersAddress = (e) => {
    const address = e.target.value;
    setOwnersAddress(address);
    console.log(ownersAddress);
  };

  /* Creating a function to make a post request to the backend of the application with the data entered by the user. */
  const addCarToDatabase = () => {
    axios.post("/add", {
      model: carModel,
      make: carMake,
      colour: carColour,
      registrationNumber: carRegistration,
      owner: carOwner,
      address: ownersAddress,
    });
    /* Adding an if statement to add validation. */
    if (
      carModel &&
      carMake &&
      carColour &&
      carRegistration &&
      carOwner &&
      ownersAddress
    ) {
      alert("Record added successfully!");
    } else {
      alert("Please enter alll fields.");
    }
  };

  return (
    <div className="addCarComponentContainer">
      <img
        src={addCarBackgroundImage}
        alt="addCarBackgroundImage"
        className="addCarImage"
      />
      <h1 className="addCarComponentHeading">
        <em>Fill in the form below to add a new car to the database:</em>{" "}
        <a href="/" className="linkToHome">
          <em>Home</em>
        </a>
      </h1>

      {/* Creating a form to allow the user to enter new information in order to be able to
       add a new car to the database. */}
      <div className="formContainer">
        <label>
          <strong>Model:</strong>
        </label>
        <input type="number" onChange={addCarModel} className="addCarInput" />
        <label>
          <strong>Make:</strong>
        </label>
        <input type="text" onChange={addCarMake} className="addCarInput" />
        <label>
          <strong>Colour:</strong>
        </label>
        <input type="text" onChange={addCarColour} className="addCarInput" />
        <label>
          <strong>Registration:</strong>
        </label>
        <input
          type="text"
          onChange={addcarRegistration}
          className="addCarInput"
        />
        <label>
          <strong>Owner:</strong>
        </label>
        <input type="text" onChange={addCarOwner} className="addCarInput" />
        <label>
          <strong>Address:</strong>
        </label>
        <input
          type="text"
          onChange={addOwnersAddress}
          className="addCarInput"
        />
        <br />
        <div className="addCarMessageAndButtonContainer">
          <p className="addCarMessageAndButtonContainerParagraph">
            <strong>
              Click the button below to add the car to the database
            </strong>
          </p>
          <button className="addCarButton" onClick={addCarToDatabase}>
            ADD CAR ITEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCar;

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
