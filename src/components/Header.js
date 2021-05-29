import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


// should show login, contact, home before signing in
// after sign-in should show profile, sign-out, not login

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