import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'

const Home = () => {
  return (
    <div className="h-200 w-full text-white" style={{backgroundColor:"rgb(25,25,25)"}}>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home