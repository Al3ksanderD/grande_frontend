import React from 'react'
import { useParams } from 'react-router-dom';

export const EmployeeSite = () => {
  const {employeename} = useParams();
  return (
    <div className='employee__container'>
      <div className='employee__container-name'>

      </div>

    </div>
  )
}
export default EmployeeSite