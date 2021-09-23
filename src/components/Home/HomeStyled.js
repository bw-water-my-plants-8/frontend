import styled from 'styled-components'

const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${pr => pr.theme.firstColor};

    .home-box {
        width: 50%;
        height: 50%;
        background-color: ${pr => pr.theme.secondColor};
        border: ${pr => pr.theme.thirdColor} solid 15px;
        box-shadow: 0 0 10px black;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .home-box button {
        width: 50%;
        height: 25%;
        font-size: 2.5rem;
        font-weight: bold;
        color: ${pr => pr.theme.thirdColor};
        background-color: ${pr => pr.theme.firstColor};
        border: ${pr => pr.theme.fourthColor} solid 2px;
    }
    .home-box button:hover {
        color: ${pr => pr.theme.firstColor};
        background-color: ${pr => pr.theme.thirdColor};
        border: ${pr => pr.theme.firstColor} solid 5px;
    }
`

export default HomeStyled;