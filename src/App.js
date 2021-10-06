import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import LoggedHeader from "./components/LoggedInHeader/LoggedHeader";
import LoginPage from "./components/LoginPage";
import logInIcon from "./images/loginIcon.jpg";
import signUpIcon from "./images/signupIcon.png";
import PlantPage from "./components/PlantsPage/PlantPage";
import Plant from "./components/Plant/Plant";
import SignupPage from "./components/SignupPage";

function App(props) {
  return (
    <div id="App">
      <div className="left">
        {props.user.username !== "" ? <LoggedHeader /> : <Header />}
      </div>
      <div className="right">
        <Switch>
          <PrivateRoute path={"/plants/:plant_id"}>
            <Plant />
          </PrivateRoute>
          <PrivateRoute path="/plants">
            <PlantPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage icon={logInIcon} />
          </Route>
          <Route path="/signup">
            <SignupPage icon={signUpIcon} />
          </Route>
          <Route path="/">
            <Home id="home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
