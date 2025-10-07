import React from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import Host from "../Host/Host";
const Jobs = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
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
          <div>
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
            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>


            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div
              className="h-60 w-180 rounded-xl border-2 border-cyan-300 p-5 mb-10"
              style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            >
              <div className="h-7 w-30 border-2 border-gray-200 rounded-xl flex justify-center items-center">
                <img src="../target_icon.png" alt="" className="h-7 w-7" />
                <h1 className="text-xs text-cyan-200">Actively Hiring</h1>
              </div>
              <div className="w-90 h-20 flex mt-1">
                <div>
                  <h1 className="text-xl font-semibold text-gray-300 mt-4">
                    Software Engineer-1
                  </h1>
                  <h2 className="text-sm text-gray-300 mt-1">Microsoft</h2>
                </div>
                <div className="relative left-100">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 w-20 ml-4"
                  />
                </div>
              </div>

              <div className="w-170 flex justify-center my-1">
                <div className="h-0.5 w-170 bg-gray-200 rounded-xl opacity-20"></div>
              </div>

              <div className="flex gap-2 mt-5">
                <img src="../location_image.png" alt="" className="h-4 w-4" />
                <p className="text-xs text-gray-300">Bengaluru2</p>
              </div>

              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img
                    src="../date_posted_icon.png"
                    alt=""
                    className="h-4 w-4"
                    style={{ backgroundColor: "rgb(20, 20 , 20)" }}
                  />
                  <p className="text-xs text-gray-300">Posted 1 week ago</p>
                </div>
                <div>
                  <button className="h-8 w-25 bg-cyan-300 text-black text-sm font-semibold rounded-xl relative bottom-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Jobs;
