import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import Host from "../Host/Host";
import { createJob } from "../services/jobService";
import { toast } from "react-toastify";
const Jobs2 = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  dispatch(() => setHostSwitch());
  const [postJobData, setPostJobData] = useState({
    title: "",
    description:"",
    eligibility:"",
    skills:"",
    about:"",
    numberOfOpenings:"",
    location:"",
    ctc: "",
    modeOfJob:"",
    experience:"",
    applyBy:"",
    startDate:"",
    company:"",
    domain:"",
    imageFile:"",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setPostJobData({ ...postJobData, [name]: value });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(postJobData);
    const responseMessage  = await createJob(postJobData);
    toast.success(responseMessage);
    alert("Job Posted Successfully"); 
    setPostJobData({
      title: "",
    description:"",
    eligibility:"",
    skills:"",
    about:"",
    numberOfOpenings:"",
    location:"",
    ctc: "",
    modeOfJob:"",
    experience:"",
    applyBy:"",
    startDate:"",
    company:"",
    domain:"",
    imageFile:"",
    });
  };
  return (
    <div>
      <div
        className="h-1035 w-full text-white"
        style={{ backgroundColor: "rgb(25,25,25)" }}
      >
        <Navbar />
        {hostSwitch == "on" && <Host />}
        <div className={hostSwitch == "on" ? button == "on" ? "relative bottom-76 opacity-25 z-10" : "relative bottom-60 opacity-25 z-10" : button == "on" ? "relative bottom-16 opacity-100 z-10" : "opacity-100 z-10"}>
          <h1 className="text-cyan-200 font-semibold text-4xl ml-15">
            Host a Job
          </h1>
          <p className="text-gray-200 text-sm mt-1 ml-15">
            Hire people who will make your Company Grow
          </p>
          <div className="ml-15 mt-10 z-20">
            <form className="flex gap-y-10 flex-wrap" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="company"
                  className="text-md font-semibold mr-5"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  value={postJobData.company}
                  name="company"
                  id="company"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="text-md font-semibold mr-5"
                >
                  Title of Job
                </label>
                <input
                  type="text"
                  value={postJobData.title}
                  name="title"
                  id="title"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>
       
              <div>
                <label
                  htmlFor="imageFile"
                  className="text-md font-semibold mr-5"
                >
                  Company Logo 
                </label>
                <input
                  type="file"
                  name="imageFile"
                  id="imageFile"
                  onChange={(e) => setPostJobData({ ...postJobData , imageFile: e.target.files[0]})}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="domain"
                  className="text-md font-semibold mr-5"
                >
                  Job Domain
                </label>
                <input
                  type="text"
                  value={postJobData.domain}
                  name="domain"
                  id="domain"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="modeOfJob" className="text-md font-semibold mr-5">
                  Job Mode
                </label>
                <input
                  type="text"
                  value={postJobData.modeOfJob}
                  name="modeOfJob"
                  id="modeOfJob"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="text-md font-semibold mr-5"
                >
                  Location
                </label>
                <input
                  type="text"
                  value={postJobData.location}
                  name="location"
                  id="location"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="startDate" className="text-md font-semibold mr-5">
                  Start Date
                </label>
                <input
                  type="text"
                  value={postJobData.startDate}
                  name="startDate"
                  id="startDate"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="ctc"
                  className="text-md font-semibold mr-5"
                >
                  CTC (Annual)
                </label>
                <input
                  type="text"
                  value={postJobData.ctc}
                  name="ctc"
                  id="ctc"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="text-md font-semibold mr-5"
                >
                  Experience
                </label>
                <input
                  type="text"
                  value={postJobData.experience}
                  name="experience"
                  id="experience"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="applyBy" className="text-md font-semibold mr-5">
                  Apply By
                </label>
                <input
                  type="text"
                  value={postJobData.applyBy}
                  name="applyBy"
                  id="applyBy"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="text-md font-semibold mr-5"
                >
                  Job Description
                </label>
                <textarea
                  type="text"
                  value={postJobData.description}
                  name="description"
                  id="description"
                  rows="10"
                  cols="50"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="eligibility"
                  className="text-md font-semibold mr-5"
                >
                  Eligibility
                </label>
                <textarea
                  type="text"
                  value={postJobData.eligibility}
                  name="eligibility"
                  id="eligibility"
                  rows="10"
                  cols="50"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="skills" className="text-md font-semibold mr-5">
                  Skills
                </label>
                <textarea
                  type="text"
                  value={postJobData.skills}
                  name="skills"
                  id="skills"
                  rows="10"
                  cols="50"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="about" className="text-md font-semibold mr-5">
                  About Company
                </label>
                <textarea
                  type="text"
                  value={postJobData.about}
                  name="about"
                  id="about"
                  rows="10"
                  cols="50"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="numberOfOpenings"
                  className="text-md font-semibold mr-5"
                >
                  Number Of Openings
                </label>
                <input
                  type="text"
                  value={postJobData.numberOfOpenings}
                  name="numberOfOpenings"
                  id="numberOfOpenings"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>
              <div className="w-310 flex justify-center">
                <button className="h-12 w-30 rounded-xl bg-cyan-300 text-black font-bold flex justify-center items-center">
                  Host
                </button>
              </div>
            </form>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Jobs2;
