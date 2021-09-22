import React, { useEffect, useState } from "react";
import schema from "./../validation/PlantInfoSchema";
import * as yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { addPlant } from "../actions";

const initialState = {
  nickname: "",
  species: "",
  frequency: 1,
  timeframe: "day",
};

const initialFormErrors = {
  nickname: "",
  species: "",
  frequency: "",
};

const btnDisabled = true;

const PlantInfoForm = () => {
  const [plant, setPlant] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(btnDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    schema.isValid(plant).then((valid) => setDisabled(!valid));
  }, [plant]);

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://water-my-plants-8-api.herokuapp.com/plants`, plant)
      .then((res) => {
        addPlant(res.data);
        setPlant(initialState);
        setFormErrors(initialFormErrors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Nickname
          <input
            type="text"
            value={plant.nickname}
            name="nickname"
            onChange={handleChange}
          />
        </label>
        <p>{formErrors.nickname}</p>
        <label>
          {" "}
          Species
          <input
            type="text"
            value={plant.species}
            name="species"
            onChange={handleChange}
          />
        </label>
        <p>{formErrors.species}</p>
        <label htmlFor="frequency">
          Water Frequency
          <input
            type="number"
            id="frequency"
            value={plant.frequency}
            name="frequency"
            onChange={handleChange}
          />
        </label>
        <p>{formErrors.frequency}</p>
        <label htmlFor="timeframe">
          <select id="timeframe" onChange={handleChange}>
            <option name="timeframe" value="day">
              Days
            </option>
            <option name="timeframe" value="week">
              Weeks
            </option>
          </select>
        </label>
        <button onClick={handleSubmit} disabled={disabled}>
          Confirm
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { addPlant })(PlantInfoForm);
