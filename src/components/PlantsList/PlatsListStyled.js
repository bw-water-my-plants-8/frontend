import styled from "styled-components";

const PlantsListStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${pr => pr.theme.firstColor};

    .plant-header {
        width: 80%;
        height: 15%;
        text-align: center;
    }

    .plant-header h1 {
        font-size: 5rem;
    }
`

export default PlantsListStyled;