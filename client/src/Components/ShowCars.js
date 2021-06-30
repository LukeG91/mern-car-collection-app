import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function ShowCars() {
  /* Setting state. */
  const [displayListOfCars, setDisplayListOfCars] = useState([]);

  /* using the useEffect hok to ensure that the function that reads the data from the database is called once and 
     that it is called when the component has loaded. */

  useEffect(() => {
    axios.get("/get").then((result) => {
      setDisplayListOfCars(result.data);
    });
  }, []);

  /* Declaring a variable that will be used to populate my table with the relevant information relating to all of the
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
    /* Creating the form to allow the user to add a new car to the database. */
    <div className="showCarsComponentContainer">
      <h1 className="showCarsComponentHeading">
        <em>See a list of the cars stored in the database:</em>{" "}
        <a href="/" className="showCarsLinkToHome">
          <em>Home</em>
        </a>
      </h1>
      <br />

      {/* Creating a table and a table container */}
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
