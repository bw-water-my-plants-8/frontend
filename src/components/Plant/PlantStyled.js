import styled from "styled-components";

const PlantStyled = styled.div`
background-color: ${pr => pr.theme.firstColor};
    .save-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 700px;
    }
    .plant-card{
        border: ${pr => pr.theme.thirdColor} dashed 5px;
        background-color: ${pr => pr.theme.fourthColor};
        border-radius: 10px;
        margin-bottom: 2rem;
        margin: 0 2rem 0 2rem;
        padding: 1.5rem;
    }
    h2{
        text-decoration: underline;
    }
`
export default PlantStyled
