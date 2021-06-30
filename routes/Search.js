module.exports = (app) => {
  const searchForOlderCars = require("../controllers/crudapp.controller");
  app.get("/search", searchForOlderCars.searchDataBaseForOlderCars);
};
