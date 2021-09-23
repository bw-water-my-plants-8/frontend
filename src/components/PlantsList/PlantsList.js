import React, { useEffect } from 'react'
import axios from 'axios'
export function PlantsList() {
    // const [plants, setPlants] = useState([])
    
    useEffect(() => {

        const getPlants = () => {
            axios.get(`https://water-my-plants-8-api.herokuapp.com/${localStorage.getItem("token")}/plants`)
            .then( res => {
                console.log(res);
            })
            .catch( err => {
                console.log(err);
            })   
        }
        getPlants();
        console.log(localStorage.getItem("token"));
    }, [])


    return (
        <h1> plants</h1>
    )
}

export default PlantsList;