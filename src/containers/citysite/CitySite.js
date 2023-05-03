import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../components/utils/usefetch/useFetch';
import Navbar from '../../components/navbars/Navbar';
import './CitySite.css';

export const CitySite = () => {
  
  const {cityname} = useParams();
  // const [data, setData] = useState(null);
  const {data, error, isPending} = useFetch("http://localhost:8080/api/v1/companies/city/" + cityname)
  
  return (
    <div className='city__container'>
        <Navbar />
        <div className='city__container-name' >
            <h1>{cityname}</h1>
            <h2> Proceed by Picking a Company </h2>
        </div>
        <div className='city__container-content'>
            {data && data.map(element => (
              <div className='city__container-content__company'>
              <Link to={'/companies/' + element.id}>
              <div className='city__container-content__company-name'>
              
                {element.name}
                
              </div>
              </Link>
              <div className='line'></div>
              <div className='city__container-content__company-description'>
                {element.description}
              </div> 
            </div>  
            ))}
            
        </div>


    </div>
  )
}
export default CitySite;