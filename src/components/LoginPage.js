import React, { useState } from "react";
import LogIconStyled from "./LogIconStyled";
import schema from "../validation/LoginSchema";
import FormStyled from "./FormStyled";
import axios from "axios";
import * as yup from "yup";
import { connect } from "react-redux";
import { setUser } from "../actions/userActions";
import { setError } from "../actions/plantActions";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};

const LoginPage = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const { log } = props;
  const history = useHistory();

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const inputChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };
  const submit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "https://water-my-plants-8-api.herokuapp.com/auth/login",
        formValues
      )
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        history.push("/plants");
        log();
        setFormValues(initialFormValues);
        setFormErrors(initialFormErrors);
      })
      .catch((err) => {
        setError(err);
        setFormValues(initialFormValues);
        setFormErrors(initialFormErrors);
      });
  };

  return (
    <>
      <LogIconStyled>
        <div>
          <img src={props.icon} alt="login user icon" />
        </div>
      </LogIconStyled>

      <FormStyled>
        <div>
          <h1>Login to Your Account</h1>
          <form onSubmit={submit}>
            <input
              className="username"
              name="username"
              placeholder="Enter your username"
              type="text"
              onChange={inputChange}
              value={formValues.username}
            />

            <p className="warning">{formErrors.username}</p>

            <input
              className="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              onChange={inputChange}
              value={formValues.password}
            />

            <p className="warning">{formErrors.password}</p>

            <button className="signIn">Sign in!</button>
          </form>
          <p className="forgot" align="center">
            <a href="/login">Forgot Password?</a>
          </p>
          <p align="center" className="signUp">
            Don't have an account? <a href="/signup">Sign up!</a>
          </p>
        </div>
      </FormStyled>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setUser, setError })(LoginPage);
