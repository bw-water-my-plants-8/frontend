import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

export default function Plant(props) {
    const [plant, setPlant] = useState();

    const { plant_id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`https://water-my-plants-8-api.herokuapp.com/plants/${plant_id}`)
        .then( res => {
            setPlant(res.data);
        })
        .catch( err => {
            console.log(err.message);
        })
    }, [plant_id])

    if(!plant) {
        return <div>Loading Plant Info</div>
    }

    const { nickname } = plant;

    return (
    <div className="save-wrapper">
        <div className="plant-card">
            <h2>{nickname}</h2>
        </div>
    </div>
    )
}