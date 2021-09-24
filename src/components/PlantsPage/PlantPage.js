import React from "react";

import PlantPageStyled from "./PlantPageStyled";
import PlantInfoForm from "../PlantInfoForm";
import PlantsList from "../PlantsList/PlantsList"

function PlantPage() {

    return (
        <PlantPageStyled>
            <div className="plant-header">
                <h1>User's Garden</h1>
                <PlantInfoForm>

                </PlantInfoForm>
            </div>
            <PlantsList>

            </PlantsList>
    
            
        </PlantPageStyled>
    )
}

export default PlantPage;