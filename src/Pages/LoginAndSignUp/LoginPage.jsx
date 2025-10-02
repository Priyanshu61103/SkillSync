import React, {useState} from 'react'
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx"

const LoginPage = () => {
    const[selected , setSelected] = useState("login");
    return (
        <div style={{backgroundColor:"rgb(25,25,25)"}}  className=' w-full h-[100vh]  flex flex-col justify-center items-center'>
            <div className='h-1/5 flex justify-center items-center ' >

                <Login/>

            </div>

        </div>
    )
}
export default LoginPage
