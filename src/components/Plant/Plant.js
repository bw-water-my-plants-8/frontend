import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import PlantStyled from "./PlantStyled";
import { deletePlants, toggleEdit } from "../../actions/plantActions";
import { connect } from "react-redux";
import PlantInfoForm from "../PlantInfoForm";

function Plant(props) {
    const [plant, setPlant] = useState();
    const history = useHistory();
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

    const handleDelete = () => {
        props.deletePlants();
        history.push('/plants');
    };
    const handleEdit = () => {
        props.toggleEdit()
    };

    return (
        <PlantStyled>
            <div className="save-wrapper">
                <div className="plant-card">
                    <h2>{nickname}</h2>
                    <button onClick={handleDelete}>Delete Plant</button>
                    <button onClick={handleEdit}>Edit Plant</button>
                </div>
                { props.editing && <PlantInfoForm />}
            </div>
        </PlantStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        editing: state.editing,
    }
}

export default connect(mapStateToProps, { deletePlants, toggleEdit })(Plant)
