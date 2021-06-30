import React, { useState } from "react";
import axios from "axios";

function SpecificSearch() {
  /* Setting state. */
  const [searchResults, setSearchResults] = useState([]);

  /* Creating a function to make a GET request using axios to the backend of my application and to retrieve
     data from my MongoDB database and display it on the web page. */

  const fetchData = () => {
    axios.get("/search").then((result) => {
      setSearchResults(result.data);
      console.log(searchResults);
    });
  };

  /* Declaring a variable that will be used to populate my table with the relevant information relating to all of the
     cars that are stored in the database. */

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
    /* Creating the form to allow the user to add a new car to the database. */
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

      {/* Creating a table and a table container */}
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
