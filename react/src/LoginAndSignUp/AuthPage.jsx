import React, {useEffect, useState} from 'react'
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

const AuthPage = () => {
    const [selected, setSelected] = useState("login");
    console.log(selected);
    return (
        <div
            style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            className="w-full min-h-screen md:h-dvh flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-md px-4 flex justify-center items-center">
                {selected === "login" ? (
                    <Login selected={selected} setSelected={setSelected} />
                ) : (
                    <SignUp setSelected={setSelected} />
                )}
            </div>
        </div>

    )
}
export default AuthPage
