import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './index.css';
import SignInSide from './containers/login/SignInSide';
import Navbar from './components/navbars/Navbar';
import HomeSite from './containers/homesite/HomeSite';

const App = () => {
  return (
      
      <Router>
        <Routes>
          
          <Route exact path='/login' element={<SignInSide />} />
          <Route exact path='/home' element={<HomeSite />} />
            

        </Routes>
      </Router>
    
  )
}

export default App
