import React, {useEffect, useState} from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import {PeopleChatLogo} from "../Jobs/PeopleChatLogo.jsx";
import JobDescription from "./JobDescription.jsx";
import ResumeInput from "./ResumeInput.jsx";

const Interview = () => {
    const [interviews, setInterviews] = useState([1]);
    const [openDialog, setOpenDialog] = useState(false);
    const[formData,setFormData] = useState({jobTitle:"",jobDescription:""});
    const[resumeFile,setResumeFile] = useState(null);
    const onClose = () => {
        setOpenDialog(false);
    }
    useEffect(()=>{
        if(selectedTab!=="resume") return
        alert("file sumbitted");
        //api class for the interview card which is added to interviews and displayed in the box
    },[resumeFile])
    console.log(resumeFile);
    const active = "underline underline-offset-3 bg-zinc-700";
    const [selectedTab, setSelectedTab] = useState("");
    return (<div style={{backgroundColor: "rgb(25,25,25)"}} className='max-h-full min-h-screen min-w-screen'>
        <Navbar/>
        <div className='flex flex-col gap-3'>
            <div className='w-2/3 flex justify-between items-center mx-auto mt-7'>
                <div>
                    <div className='text-white font-medium text-[1.2rem] '>My DashBoard</div>
                    <div className='text-3xl font-extrabold text-white'>Welcome, <span
                        className='text-cyan-300  '>UserName</span></div>
                </div>
                <button
                    type="button"
                    onClick={() => setOpenDialog(true)}
                    className="bg-pink-500 text-white font-medium inline-flex items-center justify-center gap-2 rounded-md px-3 py-2
             hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 active:bg-pink-700"
                    aria-label="Create interview"
                >
                    <span aria-hidden="true" className="text-2xl leading-none">+</span>
                    <span className="text-base">Create interview</span>
                </button>

            </div>
            <div
                className='w-2/3 border-2 border-cyan-200 bg-zinc-800 border-dashed min-h-[400px] rounded-2xl mx-auto mt-2 flex flex-col justify-evenly items-center gap-2 '>
                {interviews.length !== 0 ? <div>all Interviews</div> :
                    <>
                        <PeopleChatLogo style={{width: 200, height: 200}}/>
                        <div className=" text-zinc-100 ">You do not have any interview created</div>
                    </>
                }
            </div>
        </div>
        {openDialog && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center
               bg-black/50 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"

            >
                <div
                    className="min-w-1/2 min-h-[400px] bg-zinc-800 rounded-lg shadow-xl px-4 py-6"
                    onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking modal
                >
                    <div className="flex justify-between items-center">
                        <h1 className='text-white sm:text-[1.1rem] text-[1.8rem] ml-3 align-middle font-medium'>Please submit the following
                            details.</h1>
                        <button
                            type="button"

                            onClick={onClose}
                            className="bg-pink-500 text-white font-medium inline-flex items-center justify-center gap-2 rounded-md px-3 py-2
             hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 active:bg-pink-700"
                            aria-label="Create interview"
                        >
                            cancel
                        </button>
                    </div>

                    <>

                        <div className='inline-flex items-center justify-between  gap-2  px-3 py-2 rounded-md '>
                            <button type="button"
                                    onClick={() => setSelectedTab("resume")}
                                    className={`bg-zinc-600 ${selectedTab === "resume" ? active : null} px-4 py-2 rounded-md text-white text-[1.1rem] inline-flex items-center justify-center`}>Resume
                                Upload
                            </button>
                            <button type="button"
                                    onClick={() => setSelectedTab("job")}
                                    className={`bg-zinc-600 px-4 py-2 rounded-md ${selectedTab === "job" ? active : null}  text-white text-[1.1rem] inline-flex items-center justify-center`}>Job
                                Description
                            </button>

                        </div>
                        {selectedTab === "resume" ?
                            <div className="pt-20"><ResumeInput setResumeFile={setResumeFile} onClose={onClose} /></div> :
                            <div className="w-[95%] h-full"><JobDescription onClose={onClose} setFormData={setFormData} /></div>}
                    </>
                </div>
            </div>
        )}

    </div>)
}
export default Interview
