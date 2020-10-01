import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
// import Messaging from "../src/pages/Messaging";
import Profile from "./pages/Profile";
import Browsing from './pages/Browsing';
// import Selling from "../src/pages/Selling";
import SignUp from "../src/pages/SignUp";
// import passportSetup from "../../config/passport"
import Navy from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Navy />
        <Switch>
          <Route exact path={"/"} component = { Login } />
          <Route exact path={"/signup"} component = { SignUp } />
          <Route exact path={"/profile"} component = { Profile } />
          <Route exact path={"/browsing"} component = { Browsing } />
        </Switch>
      </div>
    </Router>
  );
}
export default App;