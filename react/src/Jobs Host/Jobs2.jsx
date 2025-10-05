import React from 'react'
import Navbar from '../Navbar/Navbar'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setHostSwitch } from '../Redux/Slice/hostSlice/hostSlice'
const Jobs2 = () => {
  const hostSwitch = useSelector((state)=>state.hostSwitch.value);
  const dispatch = useDispatch();  
  return (
    <div>
        <div className="h-760 w-full text-white" style={{backgroundColor:"rgb(25,25,25)"}}>
            <Navbar/>
            <h1 className="text-cyan-200 font-semibold text-4xl">Host an Opportunity</h1>
            {/* <Testimonials/>
            <Footer/> */}
        </div>
    </div>
  )
}

export default Jobs2