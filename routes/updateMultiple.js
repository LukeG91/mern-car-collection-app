module.exports = (app) => {
  const updateMultiple = require("../controllers/crudapp.controller");
  app.put("/updatemultiple", updateMultiple.updateMultipleEntries);
};
