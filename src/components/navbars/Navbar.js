import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/transLogo.png';

export const Navbar = () => {
  return (
    <header>
    <div class="container">
      <h1 class="logo"> Fitness Oasis</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/reservation">Reservations</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/singup">Singup</Link></li>
        </ul>
      </nav>
    </div>
    </header>
    // <div className='navbar__container'>
    //   <div className='navbar__left'>
    //     <div className='navbar__home'>
    //         <Link to="/">HOME</Link>
    //     </div>
    //     <div className='navbar__reservations'>
    //         <Link to="/reservations">My Reservations</Link>
    //     </div>
    //   </div>
    //   <div className='navbar__center'>
    //     <div className='navbar_logo'>
    //         <img src={Logo} alt='Logo image'  />
    //     </div>
    //   </div>  
        
    //   <div className='navbar__right'>
    //     <div className='navbar__login'> 
    //         <Link to="/login">Login</Link>
    //     </div>
    //     <div className='navbar__singup'>    
    //         <Link to="/singup">Sign up!</Link>
    //     </div>
    //   </div>
        

    // </div>
  )
}
export default Navbar