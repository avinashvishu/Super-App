import React from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/Home-page/RegisterPage'
import CatagoryPage from './pages/Catagory/CatagoryPage'

function App() {


  return(
    <>
   
    <Routes>
       <Route path="" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />}   />
      <Route path='/genre' element={<CatagoryPage />} ></Route>
    </Routes>

    </>
  )
}

export default App;
