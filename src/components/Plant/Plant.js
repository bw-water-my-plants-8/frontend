import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

export default function Plant(props) {
    const [plant, setPlant] = useState();

    const { id } = useParams;

    useEffect(() => {
        axiosWithAuth()
        .get(`https://water-my-plants-8-api.herokuapp.com/plants/${id}`)
        .then( res => {
            console.log(res);
            setPlant(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }, [id])

    if(!plant) {
        return <div>Loading Plant Info</div>
    }

    const { nickname } = plant;

    return (
    <div className="save-wrapper">
        <div className="movie-card">
            <h2>{nickname}</h2>
        </div>
    </div>
    )
}