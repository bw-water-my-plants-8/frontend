import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeStyled from "./HomeStyled"

const Home = () => {
    const history = useHistory()

    const sendToLogin = () => {
        history.push('/login')
    }
    const sendToSignUp = () => {
        history.push('/signup')
    }
    return (
        <HomeStyled>
            <div className="home-box">
                <button onClick={sendToLogin}>LOG IN</button>
                <button onClick={sendToSignUp}>SIGN UP</button>
            </div>
        </HomeStyled>
    )
}

export default Home;