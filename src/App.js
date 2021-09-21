import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import icon from "./images/loginIcon.jpg";
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
    <div>
      {/* Jennifer's section */}
      {/* <PlantInfoForm /> */}
      {/* Shanae's Section */}
      <Switch>
        <Route path="/login">
          <LoginPage icon={icon} />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
      </Switch>
      {/* John's section */}
    </div>
  );
}

export default App;
