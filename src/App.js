import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import icon from "./images/loginIcon.jpg";

function App() {
  return (
    <Route path="/login">
      <LoginPage icon={icon} />
    </Route>
  );
}

export default App;
