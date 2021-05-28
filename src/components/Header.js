import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className='navbar'>
            <div>
                {/* logo */}
                <h2>Goal Tracker</h2>
            </div>
            <div className='nav-links'>
                <Link to='Home'>Sign In</Link>
            </div>
        </header>
    )
}

export default Header;