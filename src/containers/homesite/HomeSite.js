import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../components/navbars/Navbar';
import './HomeSite.css';
import krakow from '../../assets/kraków.jpeg'
import gdansk from '../../assets/gdańsk.jpeg'
import warszawa from '../../assets/warszawa.jpeg'
import logo from '../../assets/transLogo.png'

export const HomeSite = () => {
  return (
    <div className='home__container'>
        <Navbar/>
        <div className='home__content'>
          <div className='home__content-welcome_sign'>
            <div className='home__content-welcome_sign-text'>
              <h1> Welcome To Fitness Oasis </h1>
              <h2>Start by Picking a City</h2>
            </div>
            <div className='home__content-welcome_sign-img'>
            <img src={logo} alt='city image'/>
            </div>
            
          </div>
          <div className='home__content-main grid-container'>
            <div className='home__content-main_city'>
              <Link to={'/cities/Kraków'}>
              <img src={krakow} alt='city image'/>
              <p className='home__content-text krakow'>KRAKÓW</p>
              </Link>
            </div>
            <div className='home__content-main_city'>
              <Link to={'/cities/Gdańsk'}>
              <img src={gdansk} alt='city image'/>
              <p className='home__content-text gdansk'>GDAŃSK</p>
              </Link>
            </div>
            <div className='home__content-main_city'>
              <Link to={'/cities/Warszawa'}>
              <img src={warszawa} alt='city image'/>
              <p className='home__content-text warszawa'>
                 WARSZAWA 
              </p>
              </Link>
            </div>
          </div>
        </div>
    </div>
    
  )
}
export default HomeSite
