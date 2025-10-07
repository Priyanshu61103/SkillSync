import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import { setButton } from "../Redux/Slice/buttonSlice/buttonSlice";
const Navbar = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  return (
    <div  className={hostSwitch == "on"? "opacity-25": "opacity-100"}>
      <div
        className="h-25 w-full bg-black flex justify-around items-center mb-5"
        style={{ backgroundColor: "rgb(12, 12, 12)" }}
      >
        <div>
          <img src="../logo.png" alt="" className="h-60" />
        </div>

        <Link to="/">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/jobpostings">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
            <h1>Job Postings</h1>
          </div>
        </Link>
        <Link to="/internships">
          <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
            <h1>Internships</h1>
          </div>
        </Link>
        <div className="h-25 w-25 flex justify-center items-center bg-transparent text-white font-semibold hover:bg-cyan-300 hover:text-black">
          <h1>About</h1>
        </div>
        <div className="flex gap-x-5">
          <div onClick={()=>dispatch(setButton())}>
            <button
              className={button==="off"?"h-12 w-35 flex justify-center items-center rounded-xl text-black font-bold gap-x-2":"h-12 w-35 flex justify-center items-center rounded-t-xl text-black font-bold gap-x-2 z-22"}
              style={{ backgroundColor: "#2af6fd" }}
            >
              <img src="../ailogo.png" alt="" className="h-5 w-5" />
              <h1>AI Features</h1>
            </button>
          </div>

          <div>
            <button
              className="h-12 w-25 flex justify-center items-center rounded-xl text-black font-bold gap-x-2"
              style={{ backgroundColor: "#2af6fd" }}
              onClick={() => dispatch(setHostSwitch())}
            >
              <img src="../plus-icon.png" alt="" className="h-5 w-5" />
              <h1>Host</h1>
            </button>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Opportunities"
            className="h-10 p-5 w-50 border-2 rounded-full border-cyan-200 placeholder:text-xs outline-0"
          />
        </div>
        <div>
          <Link to="/Auth">
            <button
              className="h-12 w-30 flex justify-center items-center rounded-xl text-black font-bold cursor-pointer"
              style={{ backgroundColor: "#2af6fd" }}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
       <div className={button == "on" ? "relative bottom-11 left-183  z-30" : "hidden"}>
            <div
              className="h-8 w-35 flex justify-center items-center border-b-2 border-b-gray-200"
              style={{ backgroundColor: "rgb(28,28,28)" }}
            >
              AI Interview
            </div>
            <div
              className="h-8 w-35 flex justify-center items-center rounded-b-xl"
              style={{ backgroundColor: "rgb(28,28,28)" }}
            >
              Resume Analysis
            </div>
      </div>
    </div>
  );
};

export default Navbar;
