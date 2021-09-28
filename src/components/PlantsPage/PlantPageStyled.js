import styled from 'styled-components'

const PlantPageStyled = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${pr => pr.theme.firstColor};

    .plant-header {
        width: 95%;
        height: 25%;
        border-bottom: ${pr => pr.theme.thirdColor} solid 5px;
        margin-bottom: 2rem;
        text-align: center;
    }

    .plant-header h1 {
        font-size: 10rem;
    }
`

export default PlantPageStyled;