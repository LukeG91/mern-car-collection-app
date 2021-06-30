/* Setting up the GET route. */
module.exports = (app) => {
  const getInformation = require("../controllers/crudapp.controller");
  app.get("/get", getInformation.getCars);
};
