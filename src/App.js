import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import LoginPage from "./components/LoginPage";
import icon from "./images/loginIcon.jpg";
import PlantsList from "./components/PlantsList/PlantsList"
// import icon from "./images/signupIcon.jpg";

import SignupPage from "./components/SignupPage";

// import PlantInfoForm from "./components/PlantInfoForm";

function App() {
  //Jennifer's section

  //Shanae's section
  // const [memberData, setMemberData] = useState([])
  // useEffect(() => {
  //   setMemberData(memberList)
  // }, [])
  //John's section

  return (
    <div id="App">
      {/* Jennifer's section */}
      {/* <PlantInfoForm /> */}
      <div className="left">
        <Header id="header"/>
      </div>
      <div className="right">
        <Switch>
          <Route path="/plants">
            <PlantsList />
          </Route>
          <Route path="/login">
            <LoginPage icon={icon} />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/">
            <Home id="home"/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
