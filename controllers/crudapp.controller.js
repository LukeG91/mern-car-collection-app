/* This is a controller file and it is best practice to add the code needed to perform the CRUD
   operations on the database within this file.  I am using mongoose to interact with the database. */
const Cars = require("../models/crudapp.model");
const mongoose = require("mongoose");

/* Writing the code to perform the necessary actions to retrieve the documents from the database. */
exports.getCars = (req, res) => {
  Cars.find((err, car) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Some errors occured while retrieving car information.",
      });
    } else {
      res.send(car);
    }
  });
};

/* Writing the code needed to perform the necessary actions to add a new car to the database when a POST request is made. */
exports.addNewCar = (req, res) => {
  const model = req.body.model;
  const make = req.body.make;
  const colour = req.body.colour;
  const registrationNumber = req.body.registrationNumber;
  const owner = req.body.owner;
  const address = req.body.address;

  let carModel = new Cars({
    model: model,
    make: make,
    colour: colour,
    registrationNumber: registrationNumber,
    owner: owner,
    address: address,
  });

  /* Saving the new data that the user has entered into the database. */
  carModel.save((err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "An error occurred while adding a new car item." });
    } else {
      console.log(data);
      res.send("New car item added successfully.");
    }
  });
};

/* Writing the code needed to perform the necessary actions to update a car in the database when a PUT request is made. */
exports.updateCarItem = (req, res) => {
  Cars.findOneAndUpdate(
    {
      registrationNumber: req.body.registrationNumber,
    },
    {
      model: req.body.updatedModel,
      make: req.body.updatedMake,
      colour: req.body.updatedColour,
      owner: req.body.updatedOwner,
      address: req.body.updatedAddress,
    },

    (err) => {
      if (err) {
        console.log(err);
        res.send(
          "The entry was not updated as an error occured, the error is: " + err
        );
      } else {
        res.send("The record has been updated successfully.");
      }
    }
  );
};

/* Writing the code needed to perform the necessary actions to remove a car document from the database when a DELETE request is made. */
exports.deleteCarItem = (req, res) => {
  const id = req.params.id;
  const recordToDelete = { registrationNumber: id };
  Cars.deleteOne(recordToDelete, (err, obj) => {
    if (err) throw err;
    console.log("The record has been deleted");
  });
  console.log(id);
};

/* Writing the code needed to update multiple entries in the database.  This will allow the user to update the owners address
   by entering the owners name and clicking the update button.  This will update all of the addresses linked to the owner. */
exports.updateMultipleEntries = (req, res) => {
  Cars.updateMany(
    { owner: req.body.carOwner },
    { $set: { address: req.body.ownerAddress } },
    (err) => {
      if (err) {
        res.send("The records were not updated, the error is: " + err);
        console.log("The records were not updated, the error is: " + err);
      } else {
        res.send("The records were updated successfully");
        console.log("The records in the database were updated successfully");
      }
    }
  );
};

/* Writing the code needed to search the database for cars that are older then 5 years. */
exports.searchDataBaseForOlderCars = (req, res) => {
  Cars.find({ model: { $lt: 2016 } }, (error, entries) => {
    if (error) {
      res
        .status(500)
        .send("An error was encountered when searching for the records.");
    } else {
      res.send(entries);
    }
  });
};

/* RESOURCES USED FOR THIS BUILD: 
=====================================================================================================================
Resource 1:
===========
HyperionDev Example: 
Name of example: Example.zip
Link to folder containing example: https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%207
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
