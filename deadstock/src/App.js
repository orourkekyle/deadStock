import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Browsing from "../src/pages/Browsing";
import Login from "../src/pages/Login";
import Messaging from "../src/pages/Messaging";
import Profile from "../src/pages/Profile";
import Selling from "../src/pages/Selling";
import Signup from "../src/pages/SignUp";
import Nav from "./components/Navbar";
import {Button} from 'reactstrap';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/Login"]} component = { Login } />
          <Route exact path={"/Messaging"} component = { Messaging} />
          <Route exact path={"/Selling"} component = {Selling} />
          <Route exact path={"/Signup"} component = {Signup} />
          <Route exact path={"/Profile"} component = {Profile} />
          <Route exact path= {"/Browsing"} component = {Browsing} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;