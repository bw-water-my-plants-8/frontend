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
            <div className="plant-header">
                <h1>Reminder Garden</h1>
            </div>
            {plantsList.map(plant => (
                <PlantDetails key={plant.plant_id} plant={plant} />
            ))}
        </PlantsListStyled>
    )
}

function PlantDetails(props) {
    const { nickname } = props.plant;

    return (
        <Link to={`/plants/${props.plant.plant_id}`}>
            <div className="movie-card" >
                <h2>{nickname}</h2>
                <p>{props.plant.plant_id}</p>
            </div>
        </Link>

    )
}
