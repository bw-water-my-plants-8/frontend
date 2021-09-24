import styled from 'styled-components'

const PlantInfoFormStyled = styled.div `
    background-color: ${pr => pr.theme.secondColor};
    box-shadow: 0 -2px 10px black;
    display: flex;

    form {
        width: 95%;
        height: 10rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-content: space-evenly;
        align-items: space-evenly;
        align-items: center;
    }

    form .inputs-box {
        width: 18%;
        height: 85%;
        display: flex;
        padding-left: 1rem;
        border-radius: 10px;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background-color: ${pr => pr.theme.firstColor};
    }

    form .inputs-box label {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        color: ${pr => pr.theme.fourthColor};
        font-weight: bold;
    }

    form .inputs-box input {
        width: 75%;
        height: 25%;
        border-color: ${pr => pr.theme.thirdColor};
        border-top: 0;
    }

    form .time {
        display: flex;
        align-items: center;
        padding: 0;
    }
    form .time select{
        width: 75%;
        height: 40%;
        text-align: center;

    }
    
    .time button {
        width: 75%;
        height: 50%;
        font-size: 2rem;
        font-weight: bold;
    }

    p {
        color: crimson;
    }
`
export default PlantInfoFormStyled;