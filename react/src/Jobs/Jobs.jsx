import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import Host from "../Host/Host";
import { getAllJobs } from "../services/jobService";
const Jobs = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const [jobData , setJobData] = useState([]);

  const fetchAllJobs = async () => {
    try{
      const jobList = await getAllJobs();
      setJobData(jobList);
    }catch(error){
      console.error('Error while fetching Jobs' , error)
    }
  };  

  useEffect(() => {
    fetchAllJobs();
  } , []);

  return (
    <div
      className="h-760 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && (
          <Host/>
      )}
      <div className={hostSwitch == "on" ? button == "on" ? "relative bottom-76 opacity-25 z-10" : "relative bottom-60 opacity-25 z-10" : button == "on" ? "relative bottom-16 opacity-100 z-10" : "opacity-100 z-10"}>
        <div className="flex gap-10">
          <Filter />
          <div className="w-full">
            <div>
              <div className="flex justify-center mb-2">
                <h1 className="text-4xl text-gray-300 font-semibold">Jobs</h1>
              </div>
              <div className="flex justify-center mb-10">
                <h1 className="text-md text-gray-300">
                  Find jobs that fit your career aspirations.
                </h1>
              </div>
            </div>
            {jobData.length > 0 ? (
              jobData.map((job,index) => (
            <div
            key = {index}
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-32 border-2 border-gray-200 rounded-xl flex justify-center items-center gap-1 px-2">
                <img src="../target_icon.png" alt="" className="h-4 w-4 object-contain flex-shrink-0" />
                <h1 className="text-xs text-cyan-200 whitespace-nowrap">Actively Hiring</h1>
              </div>
              <div className="w-full flex justify-between items-start mt-3 gap-4">
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl font-semibold text-gray-300 mt-1">
                    {job.title}
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">{job.company}</h2>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={job.imageUrl}
                    alt=""
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center my-3">
                <div className="h-0.5 w-full bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 items-center mt-3">
                <img src="../location_image.png" alt="" className="h-4 w-4 object-contain flex-shrink-0" />
                <p className="text-xs text-gray-300">{job.location}</p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2 items-center">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4 object-contain flex-shrink-0"
                    // style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 px-4 bg-cyan-300 text-black text-sm font-semibold rounded-xl hover:bg-cyan-400 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
              ))
            ) : (
              <p className="text-center text-gray-400">
                No Jobs Available
              </p>
            )}
            </div>
            </div>
            </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Jobs;
