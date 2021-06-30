/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function ShowCars() {
  /* Setting state. */
  const [displayListOfCars, setDisplayListOfCars] = useState([]);

  /* using the useEffect hook to ensure that the function that reads the data 
     from the database is called once the component has loaded/rendered. */
  useEffect(() => {
    axios.get("/get").then((result) => {
      setDisplayListOfCars(result.data);
    });
  }, []);

  /* Declaring a variable that will be used to populate my table with the relevant information relating to the
     cars that are stored in the database. */
  let listOfCarsInTable = displayListOfCars.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data.model}</td>
        <td>{data.make}</td>
        <td>{data.colour}</td>
        <td>{data.registrationNumber}</td>
        <td>{data.owner}</td>
        <td>{data.address}</td>
      </tr>
    );
  });

  return (
    <div className="showCarsComponentContainer">
      <h1 className="showCarsComponentHeading">
        <em>Below is a list of the cars stored in the database:</em>{" "}
        <a href="/" className="showCarsLinkToHome">
          <em>Home</em>
        </a>
      </h1>
      <br />

      {/* Creating a table container and a table.  The table will display the information relating to the cars
          that are stored in the database. */}
      <div className="showCarsTableDiv">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Make</th>
              <th>Colour</th>
              <th>Registration</th>
              <th>Owner</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{listOfCarsInTable}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowCars;

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
