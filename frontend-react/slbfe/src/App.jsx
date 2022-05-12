import { useState } from "react";
import "./App.css";
import Login from "./components/login/Login";
import CreateCitizen from "./components/create-citizen/CreateCitizen";
import ViewCitizen from "./components/view-citizen/ViewCitizen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListCitizens from "./components/list-citizen/ListCitizen";
import ViewContact from "./components/view-contact/ViewContact";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/add-citizen/:id" component={CreateCitizen} />
          <Route path = "/citizens" component = {ListCitizens}></Route>
          <Route exact path = "/view-citizen/:id" component = {ViewCitizen}></Route>
          <Route exact path = "/view-contact/:id" component = {ViewContact}></Route>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
