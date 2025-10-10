import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <div className="h-770 w-full text-white" style={{backgroundColor:"rgb(25,25,25)"}}>
        <Navbar/>
        <Hero/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home