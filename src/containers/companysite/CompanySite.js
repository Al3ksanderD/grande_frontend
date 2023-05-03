import React, { useEffect } from 'react'
import './CompanySite.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import useFetch from '../../components/utils/usefetch/useFetch';
import Navbar from '../../components/navbars/Navbar';

export const CompanySite = () => {
  const {companyid} = useParams();
  console.log("ID" + companyid)
  const {data, error, isPending} = useFetch("http://localhost:8080/api/v1/companies/id/" + companyid)
 
  
  return (
    <div className='city__container'>
        <Navbar />
        <div className='company__container-name' >
          {data && <h1> {data.name}</h1>}
          {isPending && <h1>Loading...</h1>}
          {error && <h1>Something went wrong!</h1>}
            <h2> Now Pick a Employee </h2>
        </div>
        <div className='company__container-content'>
            {data && data.employees.map(element => (
              
              
            <div className='company__container-content__employee'>
              <Link to={'/employees/' + 1}>  
              <div className='company__container-content__employee-name'>
                {element.name}
              </div>
              </Link>
              <div className='line'></div>
              <div className='company__container-content__employee-description'>
                {element.description}
              </div>
            </div>
            ))}
            
            
        </div>


    </div>
  )
}
