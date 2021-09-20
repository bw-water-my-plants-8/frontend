import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import icon from "./images/loginIcon.jpg";
import PlantInfoForm from "./components/PlantInfoForm";

function App() {
  //Jennifer's section

  //Shanae's section

  //John's section

  return (
    <div>
      {/* Jennifer's section */}
      <PlantInfoForm />
      {/* Shanae's Section */}

      <Route path="/login">
        <LoginPage icon={icon} />
      </Route>
      {/* John's section */}
    </div>
  );
}

export default App;
