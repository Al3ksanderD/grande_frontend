import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../components/utils/usefetch/useFetch';
import Navbar from '../../components/navbars/Navbar';
import {useNavigate} from 'react-router-dom';

export const EmployeeSite = () => {
  const {employeid} = useParams();
  const {data: dataRes, error: errorRes, isPending: isPendingRes} = useFetch("http://localhost:8080/api/v1/reservation/employee/" + employeid);
  const {data, error, isPending} = useFetch("http://localhost:8080/api/v1/employees/" + employeid);
  const [service, setService] = useState(1)
  const history = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("trying to put")
    console.log(service)
    fetch('http://localhost:8080/api/v1/reservation/reseravtions/'+ service +'/user/1', {
            method: 'PUT',
            headers: { "Content-Type": "application/json"}
        }).then(() => {
            console.log("New Reservation added");
            history('/home');
        } )
  }
  return (
    
    <div className='employee__container'>
    <Navbar />
      <div className='employee__container-name'>
          {data && <h1> {data.name}</h1>}
          {data && <p> {data.position}</p>}
          
          {isPending && <h1>Loading...</h1>}
          {error && <h1>Something went wrong!</h1>}    
      </div>
      <div className='employee__container-content'>
        <div className='employee__container-content__description'>
          <h2>About Me!</h2>
          {data && <p> {data.description}</p>}

          <h2>What i can do for you:</h2>
          {data && data.offeredServices.map(element => (
            element.name
          ))}
        </div>
        <div className='employee__container-content__reservation'>
        {dataRes && dataRes.map(element => (
            <div>
              {element.date}
              <form onSubmit={handleSubmit}>
                <select 
                onChange={(e) => setService(e.target.value) }>
                  <option value="" disabled selected>Select your option</option>
                  {data && data.offeredServices.map(element => (
                  <option value={element.id}> {element.name}</option>
                  ))}
                </select>
                <button>Submit</button>

              </form>
              
            </div>  
            
          ))}
        </div>

      </div>

    </div>
  )
}
export default EmployeeSite