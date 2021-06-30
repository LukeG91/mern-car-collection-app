/* Setting up the UPDATE route. */
module.exports = (app) => {
  const updateInfo = require("../controllers/crudapp.controller");
  app.put("/update", updateInfo.updateCarItem);
};
