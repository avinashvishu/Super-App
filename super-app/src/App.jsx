import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/Home-page/RegisterPage'
import CatagoryPage from './pages/Catagory/CatagoryPage'
import DashBoard from './pages/DashBoard/DashBoard'

function App() {


  return(
    <>
   
    <Routes>
       <Route path="" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/catagory' element={<CatagoryPage />} />
      <Route path='/dashBoard' element={<DashBoard />} />
      
    </Routes>

    </>
  )
}

export default App;
