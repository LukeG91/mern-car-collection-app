/* IMPORTING THE LIBRARIES, COMPONENTS AND STYLE SHEET NEEDED */
import React, { useState } from "react";
import axios from "axios";

function SpecificSearch() {
  /* Setting state. */
  const [searchResults, setSearchResults] = useState([]);

  /* Creating a function to make a GET request using axios to the backend of my application and to retrieve
     data from my MongoDB database and to store it in state. */
  const fetchData = () => {
    axios.get("/search").then((result) => {
      setSearchResults(result.data);
      console.log(searchResults);
    });
  };

  /* Declaring a variable that will be used to populate my table with the relevant 
     information relating to the cars that are older than 5 years. */
  let olderCars = searchResults.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data.model}</td>
        <td>{data.make}</td>
        <td>{data.registrationNumber}</td>
        <td>{data.owner}</td>
      </tr>
    );
  });
  return (
    <div className="showCarsComponentContainer">
      <h1 className="showCarsComponentHeading">
        <em>Get a list of the cars that are older than 5 years</em>
        <a href="/" className="showCarsLinkToHome">
          <em>Home</em>
        </a>
      </h1>

      <div className="showCarsFormContainer">
        <div className="updateCarMessageAndButtonContainer">
          <p className="specificSearchParagraph">
            <strong>
              Click the button below to display the relevant information
            </strong>
          </p>
          <button className="updateCarButton" onClick={fetchData}>
            SHOW CARS
          </button>
        </div>
      </div>

      {/* Creating a table container and a table.  The table will display the information relating to the cars
          that are older than 5 years. */}
      <div className="olderCarsTableDiv">
        <table className="specificSearchTable">
          <thead>
            <tr>
              <th>Model</th>
              <th>Make</th>
              <th>Registration</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>{olderCars}</tbody>
        </table>
      </div>
    </div>
  );
}

export default SpecificSearch;

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
