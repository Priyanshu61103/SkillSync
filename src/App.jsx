import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Home'

import LoginPage from "./Pages/LoginAndSignUp/LoginPage.jsx";
const App = () => {
    const[login,setLogin] = useState(false);
    const navigate = useNavigate();
    if(!login){

        useEffect(()=>{
            const timer = setTimeout(()=>{
                navigate("/login")
            },5000)
            return () => clearTimeout(timer);
        },[])
    }

  return (
      <  >

      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>

      </>
  )
}

export default App
