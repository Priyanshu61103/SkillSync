import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import Host from "../Host/Host";
const Jobs2 = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const dispatch = useDispatch();
  dispatch(() => setHostSwitch());
  const [formData, setFormData] = useState({
    companyName: "",
    emailId: "",
    companyLogo:"",
    internshipDomain: "",
    internshipType: "",
    location: "",
    Stipend: "",
    duration: "",
    applyBy: "",
    internshipDescription: "",
    eligiblity: "",
    skills: "",
    about: "",
    numberOfOpenings: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      companyName: "",
      emailId: "",
      internshipDomain: "",
      internshipType: "",
      location: "",
      Stipend: "",
      duration: "",
      applyBy: "",
      internshipDescription: "",
      eligiblity: "",
      skills: "",
      about: "",
      numberOfOpenings: "",
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
            Host an Opportunity
          </h1>
          <p className="text-gray-200 text-sm mt-1 ml-15">
            Hire people who will make your Company Grow
          </p>
          <div className="ml-15 my-10 z-20">
            <form className="flex gap-y-10 flex-wrap" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="companyName"
                  className="text-md font-semibold mr-5"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  name="companyName"
                  id="companyName"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="emailId" className="text-md font-semibold mr-5">
                  Email id
                </label>
                <input
                  type="email"
                  value={formData.emailId}
                  name="emailId"
                  id="emailId"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>
              
              <div>
                <label
                  htmlFor="companyLogo"
                  className="text-md font-semibold mr-5"
                >
                  Company Logo (Link)
                </label>
                <input
                  type="text"
                  value={formData.companyLogo}
                  name="companyLogo"
                  id="companyLogo"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>


              <div>
                <label
                  htmlFor="internshipDomain"
                  className="text-md font-semibold mr-5"
                >
                  Internship Domain
                </label>
                <input
                  type="text"
                  value={formData.internshipDomain}
                  name="internshipDomain"
                  id="internshipDomain"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="internshipType"
                  className="text-md font-semibold mr-5"
                >
                  Type of Internship
                </label>
                <input
                  type="text"
                  value={formData.internshipType}
                  name="internshipType"
                  id="internshipType"
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
                  value={formData.location}
                  name="location"
                  id="location"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label htmlFor="Stipend" className="text-md font-semibold mr-5">
                  Stipend
                </label>
                <input
                  type="text"
                  value={formData.Stipend}
                  name="Stipend"
                  id="Stipend"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="text-md font-semibold mr-5"
                >
                  Duration
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  name="duration"
                  id="duration"
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
                  value={formData.applyBy}
                  name="applyBy"
                  id="applyBy"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="internshipDescription"
                  className="text-md font-semibold mr-5"
                >
                  Internship Description
                </label>
                <textarea
                  type="text"
                  value={formData.internshipDescription}
                  name="internshipDescription"
                  id="internshipDescription"
                  rows="10"
                  cols="50"
                  onChange={onChangeHandler}
                  className="border-2 border-cyan-200 rounded-xl mt-2 outline-0 p-4 w-310"
                />
              </div>

              <div>
                <label
                  htmlFor="eligiblity"
                  className="text-md font-semibold mr-5"
                >
                  Eligiblity
                </label>
                <textarea
                  type="text"
                  value={formData.eligiblity}
                  name="eligiblity"
                  id="eligiblity"
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
                  value={formData.skills}
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
                  About
                </label>
                <textarea
                  type="text"
                  value={formData.about}
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
                  value={formData.numberOfOpenings}
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
