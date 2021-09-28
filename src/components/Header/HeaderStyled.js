import styled from "styled-components";

const HeaderStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${pr => pr.theme.firstColor};
    border-right: ${pr => pr.theme.thirdColor} solid 20px;
    /* justify-content: flex-end; */
    /* align-items: center; */

    .header-image {
        width: 95%;
        height: 25vh;
        display: flex;
        /* justify-self: flex-start; */
        background-image: url(${pr => pr.theme.mainLogo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .features-box {
        width: 100%;
        height: 75vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-evenly;
        background-color: ${pr => pr.theme.secondColor};
        box-shadow: 0 -0.5rem 2px black;
    }

    .features-box .feature {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 1.5rem;
    }
    img {
        width: 35%;
    }
    p {
        width: 75%;
        padding: 0 0.5rem;
        font-size: 1.75rem;
        color: ${pr => pr.theme.fourthColor}
    }
    hr {
        border: ${pr => pr.theme.firstColor} dashed 5px;
    }

`

export default HeaderStyled;

// .header {
//     width: 95vw;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     background-color: green;
//     padding: 0 2rem;
// }