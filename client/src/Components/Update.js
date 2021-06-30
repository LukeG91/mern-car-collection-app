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

  /* Creating event handlers to capture the data that the user enters and store them in state. */
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
    alert("The record has been updated successfully!");
  };

  return (
    /* Creating the form to allow the user to add a new car to the database. */
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

      <div className="updateFormContainer">
        <label>Model:</label>
        <input
          type="number"
          className="updateCarInput"
          onChange={aupdateCarModel}
        />
        <label>Make:</label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarMake}
        />
        <label>Colour:</label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarColour}
        />
        <label>Registration Number:</label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarRegistration}
        />
        <label>Owner:</label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateCarOwner}
        />
        <label>Address:</label>
        <input
          type="text"
          className="updateCarInput"
          onChange={updateOwnersAddress}
        />
        <br />
        <div className="updateCarMessageAndButtonContainer">
          <p>Click the button below to update a car in the database.</p>
          <button className="updateCarButton" onClick={updateCarItem}>
            UPDATE CAR ITEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
