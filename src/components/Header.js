import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <header className='navbar'>
            <nav>
                <div>
                    {/* logo */}
                    <h2>Goal Tracker</h2>
                </div>
                <div className='nav-links'>
                    <Link to='/login'>Sign In</Link>
                    <Link to='/'>Home</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;