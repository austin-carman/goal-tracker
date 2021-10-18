import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <header className='navbar'>
      <nav>
        <div>
          <h2>Goal Tracker</h2>
        </div>
        <div className='nav-links'>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Sign In</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/'>Home</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;