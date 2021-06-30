import React, { useState } from "react";
import axios from "axios";
import updateMultipleCarsBackgground from "../images/updateMultipleCarsBackgground.jpg";
import "../App.css";

function UpdateMultiple() {
  /* Setting state */
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");

  /* Creating event handlers to capture the data that the user enters and store it in state. */

  const getOwner = (e) => {
    const carOwner = e.target.value;
    setOwner(carOwner);
    console.log(owner);
  };

  const getNewAddress = (e) => {
    const ownerAddress = e.target.value;
    setAddress(ownerAddress);
    console.log(address);
  };

  /* Creating a function to take the new address that the user has entered and connect to the
     backend of the application and make a PUT(update) request to the database to update the relevant 
     entries in the database. */

  const updateMultipleCars = () => {
    axios
      .put("/updatemultiple", {
        carOwner: owner,
        ownerAddress: address,
      })
      .catch((err) => {
        console.log(
          "An error occured, the records were not updated, error is: " + err
        );
      });
  };

  return (
    /* Creating the form to allow the user to add a new car to the database. */
    <div className="updateMultipleComponentContainer">
      <img
        src={updateMultipleCarsBackgground}
        alt="updateMultipleCarsBackgground"
        className="updateMuultipleCarsImage"
      />
      <h1 className="updateMultipleCarsComponentHeading">
        <em>Fill in the form below to update the cars in the database:</em>{" "}
        <a href="/" className="updateMultipleLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      <div className="updateMultipleFormContainer">
        {/* <label className="updateMultipleLabel">
          <strong>Model:</strong>
        </label>
        <input type="number" className="updateCarInput" />
        <label className="updateMultipleLabel">
          <strong>Make:</strong>
        </label>
        <input type="text" className="updateCarInput" />
        <label className="updateMultipleLabel">
          <strong>Colour:</strong>
        </label>
        <input type="text" className="updateCarInput" />
        <label className="updateMultipleLabel">
          <strong>Registration:</strong>
        </label>
        <input type="text" className="updateCarInput" /> */}
        <label className="updateMultipleLabel">
          <strong>Owner:</strong>
        </label>
        <input type="text" className="updateCarInput" onChange={getOwner} />
        <label className="updateMultipleLabel">
          <strong>Address:</strong>
        </label>
        <input
          type="text"
          className="updateCarInput"
          onChange={getNewAddress}
        />
        <br />
        <div className="updateCarMessageAndButtonContainer">
          <p className="updateMultipleParagraph">
            <strong>Click the button below to update the car</strong>
          </p>
          <button className="updateCarButton" onClick={updateMultipleCars}>
            UPDATE CAR ITEM
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateMultiple;
