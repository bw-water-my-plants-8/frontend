import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PlantsListStyled from "./PlatsListStyled";
import { connect } from "react-redux";
import { getPlants } from "../../actions/plantActions";

function PlantsList(props) {
  useEffect(() => {
    props.getPlants();
  }, []); //eslint-disable-line

  return (
    <PlantsListStyled className="plants-list">
      {props.plants.map((plant) => (
        <PlantDetails key={plant.plant_id} plant={plant} />
      ))}
    </PlantsListStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { getPlants })(PlantsList);

function PlantDetails(props) {
  const {
    nickname,
    plant_id,
    species,
    h2oFrequency,
    last_watered,
    next_water,
  } = props.plant;

  return (
    <Link to={`/plants/${plant_id}`}>
      <div className="plant-card">
        <div className="descriptions">
          <h2>{nickname}</h2>
          <h2 className="fancy">{species}</h2>
        </div>
        <div className="water-details">
          <p>{last_watered}</p>
          <p>{next_water}</p>
          <p>
            Water: {h2oFrequency.frequency} time(s) / Every
            {h2oFrequency.timeframe}
          </p>
        </div>
      </div>
    </Link>
  );
}
