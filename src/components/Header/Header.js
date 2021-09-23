import React from 'react';
import HeaderStyled from "./HeaderStyled"
import featureOne from "../../images/featureIcon_placeholder.png"

const Header = () => {

    return (
        <HeaderStyled className="header">
            <div className="header-image">
                {/* <img src={logoIcon} alt='App Logo' /> */}
            </div>
            <div className='features-box'>
                <div className="feature">
                    <p className="feature-description">Create A list of your plants by adding Nicknames and even a Picture!</p>
                    <img className="feature-image" src={featureOne} alt="something" />
                </div>
                <hr />
                <div className="feature">
                    <p className="feature-description">Add Reminders for when your Plants need to be watered next.</p>
                    <img className="feature-image" src={featureOne} alt="something" />
                </div>
                <hr />
                <div className="feature">
                    <p className="feature-description">Personalize Your Own Reminder Garden with the Ability to Edit any Plants saved to your account!</p>
                    <img className="feature-image" src={featureOne} alt="something" />
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header;