import React, {useState} from 'react'

import {useNavigate} from "react-router-dom";

const Login = ({selected, setSelected}) => {
    const [userDetails, setUserDetails] = useState({
        userEmail: "",
        password: ""
    })

    const handleToggle = () => {
        setSelected("signup")
    }


    const [authUser, setAuthUser] = useState(false); //check is user log in or not

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target; // taking the name and the value of the field
        setUserDetails(prev => ({...prev, [name]: value})) // [name] [] use as a dynamic container
    }

    const handleSubmission = () => {
        event.preventDefault()
        if (userDetails.userEmail === "" || userDetails.password === "") {
            alert("Enter the Details properly");
            return;
        }
        //format checking will be here

        //submission logic api calls etc
        alert(`${userDetails.userEmail} is successfully log in`)
        //after successfully log in, return to home
        setAuthUser(true);
        navigate("/")
    }
    return (<div
            className="min-h-[400px] max-w-full sm:max-w-md border-2 border-cyan-300 rounded-2xl px-10 py-5 flex flex-col gap-8 items-center mx-2 sm:mx-auto">
            <h1 className='text-4xl sm:text-5xl text-amber-50 font-bold mt-2'>Welcome Back</h1>
            <form onSubmit={handleSubmission} className='w-full flex flex-col justify-center items-center gap-3'>
                <label className="min-w-full">
                    <h1 className='text-[1rem] sm:text-[1.2rem] text-amber-50 ml-2 mt-3  mb-1.5'>Email</h1>
                    <input
                        required
                        onChange={handleChange}
                        name="userEmail"
                        value={userDetails.userEmail}
                        className=" invalid:border-pink-500 invalid:text-pink-600 focus:border-cyan-500 focus:outline focus:outline-cyan-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500  text-amber-50 min-w-full px-3 py-2 rounded-[6px] border-white border-1"
                        placeholder="Enter Email" type="email"/>
                </label>
                <label className="w-full">
                    <h1 className='text-[1rem] sm:text-[1.2rem] text-amber-50 ml-2 mb-1.5'>Password</h1>
                    <input
                        required
                        minLength={8}
                        onChange={handleChange}
                        value={userDetails.password}
                        name="password"
                        className="
                      focus:border-cyan-500
                       focus:outline
                        focus:outline-cyan-500
                         focus:invalid:border-pink-500
                          focus:invalid:outline-pink-500
                            text-amber-50 min-w-full px-3
                             py-2 rounded-[6px]
                              border-white border-1"
                        placeholder="Password" type="password"/>
                </label>

                <button
                    type='submit'
                    className="bg-cyan-300 cursor-pointer min-w-full sm:w-1/3 py-2 rounded-[6px] text-[1rem] sm:text-[1.2rem] mt-1.5 font-medium flex justify-center items-center">Login
                </button>
                <h2 className="font-medium text-amber-50 ">Create a New Account ? <span
                    onClick={handleToggle}
                    className="text-pink-500 cursor-pointer hover:underline"
                    role="button"
                    tabIndex={0}
                >
          Click here
        </span>
                </h2>
            </form>

        </div>

    )
}
export default Login
