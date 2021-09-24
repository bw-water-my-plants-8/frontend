import React, { useState, useEffect } from "react";
import axios from "axios";
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
// import icon from "./images/signupIcon.jpg";

import SignupPage from "./components/SignupPage";

// import PlantInfoForm from "./components/PlantInfoForm";
const initialLoggedIn = false;
function App() {
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn);
  //Jennifer's section

  const logUser = () => {
    setLoggedIn(true);
  };
  //Shanae's section
  // const [memberData, setMemberData] = useState([])
  // useEffect(() => {
  //   setMemberData(memberList)
  // }, [])
  // John's section;
  const checkLogInStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true})
      .then( res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const componentDidMount= () => {
    this.checkLogInStatus();
  }

  useEffect(() => {
    
    const showmeLogged= () => {
      console.log(loggedIn);
    }

    showmeLogged();
  }, [loggedIn])

  return (
    <div id="App">
      {/* Jennifer's section */}
      {/* <PlantInfoForm /> */}
      <div className="left">
        {loggedIn === true ? <LoggedHeader /> : <Header />}
      </div>
      <div className="right">
        <Switch>
          <PrivateRoute path={'/plants/:id'}>
            <Plant />
          </PrivateRoute>
          <PrivateRoute path="/plants">
            <PlantPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage icon={logInIcon} log={logUser} />
          </Route>
          <Route path="/signup">
            <SignupPage icon={signUpIcon}log={logUser} />
          </Route>
          <Route path="/">
            <Home id="home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
