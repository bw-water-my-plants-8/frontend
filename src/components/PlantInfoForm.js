import React, { useEffect, useState } from "react";
import schema from "./../validation/PlantInfoSchema";
import * as yup from "yup";

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
  const [plantState, setPlantState] = useState(initialState);
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
    schema.isValid(plantState).then((valid) => setDisabled(!valid));
  }, [plantState]);

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    setPlantState({ ...plantState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios here
    setPlantState(initialState);
    setFormErrors(initialFormErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Nickname
          <input
            type="text"
            value={plantState.nickname}
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
            value={plantState.species}
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
            value={plantState.frequency}
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

export default PlantInfoForm;
