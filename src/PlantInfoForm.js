import React, { useState } from "react";

const initialState = {
  nickname: "",
  species: "",
  frequency: 1,
  timeframe: "day",
};

const PlantInfoForm = () => {
  const [plantState, setPlantState] = useState(initialState);
  const handleChange = (e) => {
    setPlantState({ ...plantState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios here
    setPlantState(initialState);
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
        <button onClick={handleSubmit}>Confirm</button>
      </form>
    </div>
  );
};

export default PlantInfoForm;
