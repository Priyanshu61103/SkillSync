import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="h-25 w-full bg-black flex justify-around items-center mb-5"
      style={{ backgroundColor: "rgb(12, 12, 12)" }}
    >
      <div>
        <img src="../logo.png" alt="" className="h-60" />
      </div>

      <Link to="/"><div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
        <h1>Home</h1>
      </div></Link>
      <Link to="/jobpostings"><div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
        <h1>Job Postings</h1>
      </div></Link>
      <Link to="/internships"><div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
        <h1>Internships</h1>
      </div></Link>
      <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
        <h1>About</h1>
      </div>
       <div>
        <button className="h-12 w-35 flex justify-center items-center rounded-xl text-black font-bold gap-x-2" style={{backgroundColor:"#2af6fd"}}>
            <img src="../ailogo.png" alt="" className="h-5 w-5"/>
            <h1>AI Interview</h1>
        </button>
      </div>
      <div>
        <input type="text" placeholder="Search Opportunities" className="h-10 p-5 w-50 border-2 rounded-full border-cyan-200 placeholder:text-xs outline-0"/>
      </div>
      <div>
        <button className="h-12 w-30 flex justify-center items-center rounded-xl text-black font-bold" style={{backgroundColor:"#2af6fd"}}>
            Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
