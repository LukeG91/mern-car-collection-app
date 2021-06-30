/* Importing the modules and libraries that I need. */
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

/* App middleware. */

/* I am adding the code below (app.use) in order for the application to be able to accept
   incoming JSON requests. I am also using the morgan logging tool to make my logs more readable. I am
   also using cors which will allow me to make connections from the front end of my app to the backend. */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* Using body-parser which gives me access to the body of a request. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Specifying the paths to my files which contain the server routes. */
require("./routes/get")(app);
require("./routes/post")(app);
require("./routes/update")(app);
require("./routes/delete")(app);
require("./routes/updateMultiple")(app);
require("./routes/Search")(app);

/* Using mongoose and the connection string for my database in order to be able to connect to my database. */
mongoose.connect(
  "mongodb+srv://lukeg:Summer2020!@hyperiondev.h58l2.mongodb.net/mernCrudApp?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
  }
);

/* Calling React build assets. */
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/* Setting the port as an environment variable and I am making the server listen on port 8080 locally. 
   I have deployed this web app to Heroku, URL: https://mern-car-collection-app.herokuapp.com/ */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `This server is running on port ${PORT}: \nBrowse to http://localhost:8080 to  see the server.`
  );
});

module.exports = app;

/* Resource used:
=====================================================================================================================
HyperionDev Example: 
Created by: Hyperion Development
Name of example: Example.zip
Link to folder containing example: https://www.dropbox.com/home/Luke%20-59210/Full%20Stack%20Web%20Developer/Task%207
=====================================================================================================================
*/
