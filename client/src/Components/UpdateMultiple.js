/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React, { useState } from "react";
import axios from "axios";
import updateMultipleCarsBackgground from "../images/updateMultipleCarsBackgground.jpg";
import "../App.css";

function UpdateMultiple() {
  /* Setting state */
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");

  /* Creating event handlers to capture the data that the user enters and store that data in state. */
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

  /* Creating a function to connect to the backend of the application and make a PUT(update) 
     request to the database in order to update the exisiting address in the database. */
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
    /* Adding an if statement for validation */
    if (owner && address) {
      alert("The update will be processed!");
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div className="updateMultipleComponentContainer">
      <img
        src={updateMultipleCarsBackgground}
        alt="updateMultipleCarsBackgground"
        className="updateMuultipleCarsImage"
      />
      <h1 className="updateMultipleCarsComponentHeading">
        <em>Fill in the form below to update multiple cars in the database:</em>{" "}
        <a href="/" className="updateMultipleLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      {/* Creating a form to allow the user to enter new information in order to be able to
          update multiple cars that are stored in the database. */}
      <div className="updateMultipleFormContainer">
        <p className="updateMultipleInstructionsParagraph">
          <strong>
            This section allows you to update the owner's residential address.
            In order to do so, please enter the name of the owner and the new
            residential address.
          </strong>
        </p>
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
