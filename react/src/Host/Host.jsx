import React from 'react'
import { useSelector } from 'react-redux';
import Jobs2 from '../Jobs Host/Jobs2';
import { Link } from 'react-router-dom';
const Host = () => { 
  return (
    <div>
        <div
          className="relative left-210 bottom-10 h-60 w-100 pt-2 p-5 rounded-xl flex justify-center flex-wrap z-20"
          style={{ backgroundColor: "rgb(20, 20 , 20)" }}
        >
          <Link to={"/jobhost"}><div className="h-30 w-95 text-gray-200 pl-2 p-5 flex items-center border-b-2 gap-x-2 border-cyan-200">
            <div className="h-20 w-20 pt-2">
              <img src="../job-icon.png"></img>
            </div>
            <div>
              <h1 className="font-semibold">Jobs</h1>
              <p className="text-xs">
                Fill permanent positions with qualified professionals
              </p>
            </div>
            <div className="h-5 w-5">
              <img src="plus-icon-2.png"></img> 
            </div> 
          </div></Link>
          <div className="h-30 w-95 text-gray-200 pl-2 p-5 flex items-center gap-x-2 border-cyan-200">
            <div className="h-20 w-20 pt-2">
              <img src="../job-icon.png"></img>
            </div>
            <div>
              <h1 className="font-semibold">Internships</h1>
              <p className="text-xs">
                Build your talent pipeline with emerging prospects
              </p>
            </div>
            <div className="h-5 w-5">
              <img src="plus-icon-2.png"></img> 
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Host