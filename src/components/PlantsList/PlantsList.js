import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

import PlantsListStyled from './PlatsListStyled'
export default function PlantsList() {
    const [plantsList, setPlantsList] = useState([])

    useEffect(() => {

        const getPlants = () => {
            axios.get(`https://water-my-plants-8-api.herokuapp.com/plants`, {
                headers: {
                  'Authorization': `${localStorage.getItem("token")}`
                }
              })
            .then( res => {
                setPlantsList(res.data)
                // console.log(res);
            })
            .catch( err => {
                console.log(err);
            })   
        }
        getPlants();
    }, [])


    return (
        <PlantsListStyled className="plants-list">
            {plantsList.map(plant => (
                <PlantDetails key={plant.plant_id} plant={plant} />
            ))}
        </PlantsListStyled>
    )
}

function PlantDetails(props) {
    const { nickname , plant_id, species, h2oFrequency, last_watered, next_water } = props.plant;

    return (
        <Link to={`/plants/${plant_id}`}>
            <div className="plant-card" >
                <div className="descriptions">
                    <h2>{nickname}</h2>
                    <h2 className="fancy">{species}</h2>
                </div>
                <div className="water-details">
                    <p>{last_watered}</p>
                    <p>{next_water}</p>
                    <p>Water: {h2oFrequency.frequency} time(s) / Every {h2oFrequency.timeframe}</p>
                </div>
                

            </div>
        </Link>

    )
}
