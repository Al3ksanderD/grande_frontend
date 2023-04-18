import React from 'react'
import './CompanySite.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbars/Navbar';

export const CompanySite = () => {
  const {companyname} = useParams();
  return (
    <div className='city__container'>
        <Navbar />
        <div className='company__container-name' >
            <h1>{companyname}</h1>
            <h2> Now Pick a Employee </h2>
        </div>
        <div className='company__container-content'>
            <div className='company__container-content__employee'>
              <Link to={'/employee/Joe Doe'}>  
              <div className='company__container-content__employee-name'>
                Joe Doe
              </div>
              </Link>
              <div className='line'></div>
              <div className='company__container-content__employee-description'>
                Im an existing personal trainer
              </div>
            </div>
            
        </div>


    </div>
  )
}
