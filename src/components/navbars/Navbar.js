import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar__container'>
        <div className='navbar__home'>
            <Link to="/">Home</Link>
        </div>
        <div className='navbar_logo'>
            Fitness Oasis
        </div>

        <div className='navbar__links'> 
            
            <Link to="/login">Login</Link>
            <Link to="/singup">Sign up!</Link>
        </div>

    </div>
  )
}
export default Navbar