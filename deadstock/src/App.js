import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Browsing from "../src/pages/Browsing";
import Login from "../src/pages/Login";
// import Messaging from "../src/pages/Messaging";
import Profile from "../src/pages/Profile";
// import Selling from "../src/pages/Selling";
// import Signup from "../src/pages/SignUp";
// import passportSetup from "../../config/passport"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"} component = { Login } />
          <Route exact path={"/profile"} component = { Profile } />
        </Switch>
      </div>
    </Router>
  );
}
export default App;