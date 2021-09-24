import React from "react";

import PlantPageStyled from "./PlantPageStyled";
import PlantInfoForm from "../PlantInfoForm";
import PlantsList from "../PlantsList/PlantsList"

function PlantPage() {

    return (
        <PlantPageStyled>
            <PlantsList>
                
            </PlantsList>
            
            <PlantInfoForm>

            </PlantInfoForm>
    
            
        </PlantPageStyled>
    )
}

export default PlantPage;