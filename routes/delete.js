/* Setting up the DELETE route. */
module.exports = (app) => {
  const deleteCarItem = require("../controllers/crudapp.controller");
  app.delete("/delete/:id", deleteCarItem.deleteCarItem);
};
