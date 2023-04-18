import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../components/utils/usefetch/useFetch';
import Navbar from '../../components/navbars/Navbar';
import './CitySite.css';

export const CitySite = () => {
  
  const {cityname} = useParams();
  // useEffect(() => {
  //   fetch('/api/v1/companies/city/Warszawa')
  // .then(res => res.json())
  // .then(json => console.log(json))
  //  }, []);
//   const {data, error, isPending} = useFetch(`http://localhost:8080/api/v1/companies/city/` + cityname)
  return (
    <div className='city__container'>
        <Navbar />
        <div className='city__container-name' >
            <h1>{cityname}</h1>
            <h2> Proceed by Picking a Company </h2>
        </div>
        <div className='city__container-content'>

            <div className='city__container-content__company'>
              <Link to={'/companies/Real Company'}>
              <div className='city__container-content__company-name'>
              
                Real Company
                
              </div>
              </Link>
              <div className='line'></div>
              <div className='city__container-content__company-description'>
                We are an existing company please trust us, we're not trying to fool you!
              </div>
              
            </div>
            <div className='city__container-content__company'>
              <Link to={'/companies/Real Company'}>
              <div className='city__container-content__company-name'>
              
                Real Company
                
              </div>
              </Link>
              <div className='line'></div>
              <div className='city__container-content__company-description'>
                We are an existing company please trust us, we're not trying to fool you!
              </div>
              
            </div>
            <div className='city__container-content__company'>
              <Link to={'/companies/Real Company'}>
              <div className='city__container-content__company-name'>
              
                Real Company
                
              </div>
              </Link>
              <div className='line'></div>
              <div className='city__container-content__company-description'>
                We are an existing company please trust us, we're not trying to fool you!
              </div>
              
            </div>
           
           
        </div>


    </div>
  )
}
export default CitySite;