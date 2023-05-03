import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './index.css';
import SignInSide from './containers/login/SignInSide';
import Navbar from './components/navbars/Navbar';
import HomeSite from './containers/homesite/HomeSite';
import CitySite from './containers/citysite/CitySite';
import { CompanySite } from './containers/companysite/CompanySite';
import EmployeeSite from './containers/employeesite/EmployeeSite';

const App = () => {
  return (
      
      <Router>
        <Routes>
          
          <Route exact path='/login' element={<SignInSide />} />
          <Route exact path='/home' element={<HomeSite />} />
          <Route path='/cities/:cityname' element={<CitySite/>} /> 
          <Route path='/companies/:companyid' element={<CompanySite/>} /> 
          <Route path='/employees/:employeid' element={<EmployeeSite/>} />            

        </Routes>
      </Router>
    
  )
}

export default App
