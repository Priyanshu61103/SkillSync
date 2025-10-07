import React, {useState} from 'react'

const SignUp = ({setSelected}) => {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        userEmail: "",
        type: "",
        password: ""
    })
    const [formData, setFormData] = useState({
        userName: null,
        userEmail: null,
        password: null,
        type: "student",
        confirmedPassword: null
    })

    const activeBtn =
        "bg-cyan-600 focus:border-cyan-500 focus:outline-2 focus:outline-pink-500   ";
    const inactiveBtn =
        "bg-pink-600 text-pink-200 hover:bg-pink-600/40";

    function handleSubmission(e) {
        e.preventDefault();
        const name = formData.userName;
        const email = formData.userEmail;
        const type = formData.type;
        const password = formData.password;
        const confirmedPassword = formData.confirmedPassword;
        if(password!==confirmedPassword) {
            alert("not matching password, please enter again");
            return;
        }
        const details = {
            userName: name,
            userEmail: email,
            type: type,
            password: password
        }
        setUserDetails(details);
        alert(userDetails.userName+" "+userDetails.userEmail);
        //api calls
        //
        setSelected("login");
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    }

    function handleUserType(userType) {
        setFormData(prev => ({...prev, type: userType}));
    }

    function handleToggle() {
        setSelected("login");
    }

    console.log(formData)
    return (
        <div
            className="w-full min-h-screen md:h-dvh flex items-center justify-center px-3"
            style={{backgroundColor: "rgb(20, 20, 20)"}}
        >
            <div
                className="w-full max-w-md sm:max-w-lg rounded-2xl border-2 border-cyan-300 px-6 sm:px-8  sm:py-7 mx-auto shadow-xl shadow-black/50 ring-1 ring-cyan-300/20">
                <h1 className="text-4xl sm:text-5xl text-amber-50 font-medium mt-1 text-center">
                    Sign Up
                </h1>

                <form
                    onSubmit={handleSubmission}
                    className="mt-4 w-full flex flex-col gap-3"
                    noValidate
                >
                    <label className="w-full">
        <span className="block text-[1rem] sm:text-[1.1rem] text-amber-50 ml-1.5 mb-1">
          Name
        </span>
                        <input
                            required
                            onChange={handleChange}
                            name="userName"
                            value={formData.userName}
                            className="w-full px-3 py-2 rounded-[6px] border border-white/30 bg-transparent text-amber-50 placeholder:text-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                     invalid:border-pink-500 invalid:text-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Enter name"
                            type="text"
                            autoComplete="name"
                        />
                    </label>

                    <div className="w-full">
        <span className="block text-amber-50 text-[1.1rem] ml-1.5">
          Are you a ?
        </span>
                        <div
                            className="mt-3 flex w-full justify-evenly items-center text-zinc-300 font-medium text-[1.05rem]">
                            <button
                                type="button"
                                onClick={() => handleUserType("student")}
                                className={`px-3 py-2 rounded-[6px] transition-colors duration-150
                        ${formData.type === "student" ? activeBtn : inactiveBtn}`}
                                aria-pressed={formData.type === "student"}
                            >
                                Candidate
                            </button>

                            <button
                                type="button"
                                onClick={() => handleUserType("recruiter")}
                                className={`px-3 py-2 rounded-[6px] transition-colors duration-150
                        ${formData.type === "recruiter" ? activeBtn : inactiveBtn}`}
                                aria-pressed={formData.type === "recruiter"}
                            >
                                Recruiter
                            </button>
                        </div>
                    </div>

                    <label className="w-full">
        <span className="block text-[1rem] sm:text-[1.1rem] text-amber-50 ml-1.5 mb-1">
          Email
        </span>
                        <input
                            required
                            onChange={handleChange}
                            name="userEmail"
                            value={formData.userEmail}
                            className="w-full px-3 py-2 rounded-[6px] border border-white/30 bg-transparent text-amber-50 placeholder:text-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                     invalid:border-pink-500 invalid:text-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Enter Email"
                            type="email"
                            autoComplete="email"
                        />
                    </label>

                    <label className="w-full">
        <span className="block text-[1rem] sm:text-[1.1rem] text-amber-50 ml-1.5 mb-1">
          Password (8 characters minimum)
        </span>
                        <input
                            required
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            minLength={8}
                            className="w-full px-3 py-2 rounded-[6px] border border-white/30 bg-transparent text-amber-50 placeholder:text-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                     invalid:border-pink-500 invalid:text-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Password"
                            type="password"
                            autoComplete="new-password"
                        />
                    </label>

                    <label className="w-full">
        <span className="block text-[1rem] sm:text-[1.1rem] text-amber-50 ml-1.5 mb-1">
          Confirm Password
        </span>
                        <input
                            required
                            onChange={handleChange}
                            value={formData.confirmedPassword}
                            name="confirmedPassword"
                            minLength={8}
                            className="w-full px-3 py-2 rounded-[6px] border border-white/30 bg-transparent text-amber-50 placeholder:text-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500
                     invalid:border-pink-500 invalid:text-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Confirm Password"
                            type="password"
                            autoComplete="new-password"
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full sm:w-1/2 mx-auto bg-cyan-300 text-black cursor-pointer py-2 rounded-[6px]
                   text-[1rem] sm:text-[1.1rem] mt-1.5 font-medium flex justify-center items-center
                   transition-colors hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        Create account
                    </button>

                    <p className="text-center font-medium text-amber-50">
                        Already have an account?{" "}
                        <span
                            onClick={handleToggle}
                            className="text-pink-500 cursor-pointer hover:underline"
                            role="button"
                            tabIndex={0}
                        >
          Click here
        </span>
                    </p>
                </form>
            </div>
        </div>

    )
}
export default SignUp
