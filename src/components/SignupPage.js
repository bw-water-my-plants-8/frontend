import React, { useEffect, useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { connect } from "react-redux";
import { setUser } from "../actions";

import FormStyled from "./FormStyled";
import schema from "../validation/SignupSchema";

const initialFormValues = {
  username: "",
  password: "",
  phone: "",
  // firstName: "",
  // lastName: "",
  // tos: false,
};
const initialFormErrors = {
  username: "",
  password: "",
  phone: "",
  //   firstName: "",
  //   lastName: "",
  //   tos: false,
};
const initialDisabled = true;

const SignupPage = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const inputChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const submit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
    axios
      .post(
        "https://water-my-plants-8-api.herokuapp.com/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        //history.push(`plants route`)
        // setFormValues(initialFormValues);
        // setFormErrors(initialFormErrors);
      })
      .catch((err) => {
        console.log(err);
        // setFormValues(initialFormValues);
        // setFormErrors(initialFormErrors);
      });
    // setFormValues(initialFormValues);
    // setFormErrors(initialFormErrors);
  };

  return (
    <FormStyled>
      <div>
        <h1>Create New Account</h1>
        <form onSubmit={submit}>
          <input
            className="username"
            name="username"
            placeHolder="Enter a username"
            type="text"
            onChange={inputChange}
            value={formValues.username}
          />

          <p class="warning">{formErrors.username}</p>

          {/* <input
            className="name"
            name="firstName"
            placeHolder="Enter first name"
            type="text"
            onChange={inputChange}
            value={formValues.firstName}
          />

          <p class="warning">{formErrors.firstName}</p>

          <input
            className="name"
            name="lastName"
            placeHolder="Enter last name"
            type="text"
            onChange={inputChange}
            value={formValues.lastName}
          />

          <p class="warning">{formErrors.lastName}</p> */}

          <input
            className="phone"
            name="phone"
            placeHolder="Enter a phone number"
            type="text"
            onChange={inputChange}
            value={formValues.phone}
          />

          <p class="warning">{formErrors.phone}</p>
          <input
            className="password"
            name="password"
            placeHolder="Enter a password"
            type="password"
            onChange={inputChange}
            value={formValues.password}
          />
          <p class="warning">{formErrors.password}</p>
          {/* <label>Reenter Password<br/>
            <input 
              name="passconfirm"
              placeHolder="Reenter the password"
              type="password"
              onChange={inputChange}
              value={formValues.passconfirm}
            />
          </label>
          <p class="warning">{formErrors.passconfirm}</p> */}
          <label className="terms" align="center">
            <a href="/">Terms of Service</a>
            <input
              type="checkbox"
              name="tos"
              checked={formValues.tos}
              onChange={inputChange}
            />
          </label>
          <p class="warning">{formErrors.tos}</p>
          <button className="newAcct" disabled={disabled}>
            Create Account!
          </button>
        </form>
      </div>
    </FormStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setUser })(SignupPage);
