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

  /* Creating event handlers to capture the data that the user enters and store them in state. */

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

  /* Creating a function to add the new car item to the database.*/

  const addCarToDatabase = () => {
    axios.post("/add", {
      model: carModel,
      make: carMake,
      colour: carColour,
      registrationNumber: carRegistration,
      owner: carOwner,
      address: ownersAddress,
    });
    alert("Record added successfully!");
  };

  return (
    /* Creating the form to allow the user to add a new car to the database. */
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
        </a>{" "}
      </h1>

      <div className="formContainer">
        <label>Model:</label>
        <input type="number" onChange={addCarModel} className="addCarInput" />
        <label>Make:</label>
        <input type="text" onChange={addCarMake} className="addCarInput" />
        <label>Colour:</label>
        <input type="text" onChange={addCarColour} className="addCarInput" />
        <label>Registration Number:</label>
        <input
          type="text"
          onChange={addcarRegistration}
          className="addCarInput"
        />
        <label>Owner:</label>
        <input type="text" onChange={addCarOwner} className="addCarInput" />
        <label>Address:</label>
        <input
          type="text"
          onChange={addOwnersAddress}
          className="addCarInput"
        />
        <br />
        <div className="addCarMessageAndButtonContainer">
          <p>Click the button below to add the car to the database.</p>
          <button className="addCarButton" onClick={addCarToDatabase}>
            ADD CAR ITEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
