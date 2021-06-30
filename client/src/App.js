/* IMPORTING THE LIBRARIES AND COMPONENTS I NEED */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import AddCar from "./Components/AddCar";
import Update from "./Components/Update";
import UpdateMultiple from "./Components/UpdateMultiple";
import RemoveCar from "./Components/RemoveCar";
import ShowCars from "./Components/ShowCars";
import SpecificSearch from "./Components/SpecificSearch";
import "./App.css";

/* USING 'BrowserRouter, Route, Switch' TO ROUTE THE USER TO THE DIFFERENT PAGES OF THE WEB APP */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/">
              <Header />
            </Route>
            <Route path="/add">
              <AddCar />
            </Route>
            <Route path="/update">
              <Update />
            </Route>
            <Route path="/updatemultiple">
              <UpdateMultiple />
            </Route>
            <Route path="/delete">
              <RemoveCar />
            </Route>
            <Route path="/get">
              <ShowCars />
            </Route>
            <Route path="/search">
              <SpecificSearch />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* RESOURCES USED FOR THIS BUILD: 
=====================================================================================================================
Resource 1:
===========
FULL-STACK_MEDIA-SEARCH-APP 
Created by: Luke Glendining
Link to website: https://fullstack-media-search-project.herokuapp.com/
Link to GitHub repo: https://github.com/LukeG91/fullstack-media-search-project
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
