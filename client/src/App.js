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
