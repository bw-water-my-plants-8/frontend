import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {

    return (
        <div className="header">
            <div className="header-image">
                {/* <img src={logoIcon} alt='App Logo' /> */}
            </div>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/login'> Login </Link>
                <Link to='/signup'> Sign Up </Link>
                <Link to='/plant'> Plant </Link> {/**This is just a trial link */}
            </nav>
        </div>
    )
}

export default Header;