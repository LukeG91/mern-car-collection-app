/* Setting up the POST route. */
module.exports = (app) => {
  const addInformation = require("../controllers/crudapp.controller");
  app.post("/add", addInformation.addNewCar);
};
