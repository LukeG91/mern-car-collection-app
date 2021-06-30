/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React from "react";
import headerBackgroundImage from "../images/mainBackground.jpg";
import "../App.css";

function Header() {
  /* Creating the header section which contains information relating to what the app does as well as 
     links to the different pages on the website. */
  return (
    <div className="mainHeaderContainer">
      <h1 className="headerComponentMainHeading">Cape Town Cars:</h1>
      <span className="headerComponentInstructions">
        This web app allows users to add, update, delete and read information
        relating to cars, this information is stored in a MongoDB.
      </span>
      <div className="headerSubContainer">
        <h4 className="headerComponentOptionHeading">
          Choose an option below to start using the application:
        </h4>
        <div className="navigationOptionsContainer">
          <a href="/add" className="navigationLink">
            ADD A CAR
          </a>
          <a href="/update" className="navigationLink">
            UPDATE A CAR
          </a>
          <a href="/updatemultiple" className="navigationLink">
            UPDATE MULTIPLE CARS
          </a>
          <a href="/delete" className="navigationLink">
            REMOVE A CAR
          </a>
          <a href="/get/get" className="navigationLink">
            SHOW CAR INFO
          </a>
          <a href="/search/search" className="navigationLink">
            SPECIFIC SEARCH
          </a>
        </div>
      </div>
      <div className="headerImageContainer">
        <img
          src={headerBackgroundImage}
          alt="headerBackgroundImage"
          className="headerComponentImage"
        />
      </div>
    </div>
  );
}

export default Header;
