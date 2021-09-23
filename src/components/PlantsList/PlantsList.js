import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
            })
            .catch( err => {
                console.log(err);
            })   
        }
        getPlants();
        // console.log(localStorage.getItem("token"));
    }, [])


    return (
        <PlantsListStyled className="plants-list">
            <div className="plant-header">
                <h1>Reminder Garden</h1>
            </div>
            {plantsList.map(plant => (
                <PlantDetails key={plant.id} plant={plant} />
            ))}
        </PlantsListStyled>
    )
}

function PlantDetails(props) {
    const { nickname } = props.plant;

    return (
        <div className="plant-details">
            <h2>{nickname}</h2>
        </div>
    )
}
