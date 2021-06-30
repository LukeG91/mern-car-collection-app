/* This is a controller file and it is best practice to add the code needed to perform the CRUD
   operations on the database within this file.  I am using mongoose to interact with the database. */

const Cars = require("../models/crudapp.model");
const mongoose = require("mongoose");

/* Writing the code to perform the necessary actions to display the information within the database in the
   browser when a GET request is made. */

exports.getCars = (req, res) => {
  /* Displaying the car information in the database. */
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

/* Writing the code to perform the necessary actions to display the information within the database in the
   browser when a POST request is made. */

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

  carModel.save((err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "An error occurred while adding a new car item." });
    } else {
      console.log(data);
      res.send("New car item added.");
    }
  });
};

/* Writing the code to perform the necessary actions to display the information within the database in the
   browser when a PUT(update) request is made. */

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

/* Writing the code to perform the necessary actions to display the information within the database in the
   browser when a DELETE request is made. */

exports.deleteCarItem = (req, res) => {
  const id = req.params.id;
  const recordToDelete = { registrationNumber: id };
  Cars.deleteOne(recordToDelete, (err, obj) => {
    if (err) throw err;
    console.log("record deleted");
  });
  // await Cars.findOneAndDelete(carRegistration).exec();
  // res.send("Record deleted successfully.");
  console.log(id);
};

/* Writing the code needed to update multiple entries in the database.  This will allow the user to update their address
   by entering their name and clicking the update button.  This will update all of the address linked to owner. */

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
  Cars.find({ model: { $lt: 2015 } }, (error, entries) => {
    if (error) {
      res
        .status(500)
        .send("An error was encountered when searching for the records.");
    } else {
      res.send(entries);
    }
  });
};
