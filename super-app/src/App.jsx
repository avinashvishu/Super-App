import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/Home-page/RegisterPage'
import CatagoryPage from './pages/Catagory/CatagoryPage'
import DashBoard from './pages/DashBoard/DashBoard'
import Browse from './pages/Browser-page/Browse'

function App() {


  return(
    <>
   
    <Routes>
       <Route path="" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/catagory' element={<CatagoryPage />} />
      <Route path='/dashBoard' element={<DashBoard />} />
      <Route path='/browser' element={<Browse />} />
      
    </Routes>

    </>
  )
}

export default App;
