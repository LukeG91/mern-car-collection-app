/* Setting up the UPDATE MULTIPLE route. */
module.exports = (app) => {
  const updateMultiple = require("../controllers/crudapp.controller");
  app.put("/updatemultiple", updateMultiple.updateMultipleEntries);
};
