import styled from "styled-components";

const PlantsListStyled = styled.div`
    width: 97%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    a {
        width: 25%;
        margin-bottom: 2rem;
        text-decoration: none;
        color: ${pr => pr.theme.secondColor};
    }
    .plant-card {
        border: ${pr => pr.theme.thirdColor} dashed 5px;
        background-color: ${pr => pr.theme.fourthColor};
        border-radius: 10px;
        margin-bottom: 2rem;
        margin: 0 2rem 0 2rem;
        padding: 1.5rem;
    }

    .descriptions {
        border-bottom: black solid 1px;
    }

    .descriptions h2 {
        font-size: 3rem;
        font-weight: bold;
    }

    .descriptions .fancy {
        font-style: italic;
        font-weight: normal;
    }

    .water-details {
        margin-top: 1.5rem;
    }

`

export default PlantsListStyled;