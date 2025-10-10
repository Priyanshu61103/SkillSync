import React from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Details = () => {
  const arr = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Data Structures",
    "Algorithms",
  ];
  return (
    <div
      className="h-500 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      <div>
        <div className="relative top-25">
          <h1 className="text-cyan-300 text-center text-2xl font-bold">
            Front End Developer
          </h1>
          <div className="w-full min-h-400 flex justify-center mt-10 lg:mb-10 mb-40">
            <div className="lg:w-200 w-100 h-fit border-2 border-cyan-400 p-10 pl-12 rounded-4xl">
              <div className="h-8 w-40 rounded-xl border-2 border-cyan-300 text-gray-300 text-sm flex gap-x-2 justify-center items-center mb-5">
                <img src="../target_icon.png" alt="" className="h-8 w-7" />
                <p>Actively Hiring</p>
              </div>
              <div className="flex gap-x-5">
                <div className="flex gap-x-2 items-center justify-around">
                  <img
                    src="../microsoft_logo.png"
                    alt=""
                    className="h-20 lg:w-20 min-w-20 rounded-full relative bottom-2"
                  />
                </div>
                <div>
                  <h1
                    className={"lg:text-3xl text-lg text-gray-300 font-semibold relative top-2"}
                  >
                    Microsoft
                  </h1>
                  <p
                    className={
                      "lg:text-md text-xs font-semibold text-white mb-5"
                    }
                  >
                  </p>
                </div>
              </div>
              <div className="flex lg:gap-x-10 gap-5 flex-wrap">
                <div>
                  <button className="h-7 w-32  border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img
                      src="../location_image.png"
                      alt=""
                      className="h-5 w-5"
                    />
                    <p className="lg:text-md text-sm font-semibold text-gray-300">
                      LOCATION
                    </p>
                  </button>
                  <p
                    className={
                      "lg:text-md text-sm font-semibold text-gray-300 w-32 text-center"
                    }
                  >
                    Bangalore
                  </p>
                </div>
                <div>
                  <button className="h-7 w-40 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img src="../date_icon.png" alt="" className="h-5 w-8" />
                    <p className="lg:text-md text-sm font-semibold text-gray-300">
                      DATE POSTED
                    </p>
                  </button>
                  <h1 className="lg:text-md text-sm font-semibold text-gray-300  w-40 text-center">
                    2025-10-10
                  </h1>
                </div>

                <div>
                  <button className="h-7 w-32 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img
                      src="../company_size_icon.png"
                      alt=""
                      className="h-5 w-5"
                    />
                    <p className="text-md font-semibold text-gray-300">SIZE</p>
                  </button>
                  <h1
                    className={
                      "text-md font-semibold text-gray-300 w-32 text-center"
                    }
                  >
                    40
                  </h1>
                </div>

                <div>
                  <button className="h-7 w-32 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img src="../company_logo.png" alt="" className="h-5 w-5" />
                    <p className="text-md font-semibold text-gray-300">TYPE</p>
                  </button>
                  <h1
                    className={
                      "text-md font-semibold text-gray-300  w-32 text-center"
                    }
                  >
                    Hybrid
                  </h1>
                </div>
              </div>
              <div>
                <div className="h-0.5 lg:w-160 w-70 mt-10 bg-cyan-300"></div>
                <div className="m-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    Description
                  </h1>
                  <p className={"text-gray-300 mt-5 text-md font-medium"}>
                    At Microsoft, our purpose is singular and profound: to empower every person and every organization on the planet to achieve more. This mission is the foundation for everything we build, from Azure and Microsoft 365 to the latest AI innovations. We are committed to a culture that drives this vision forward. Our success is built on a Growth Mindset, where learning from the outside and embracing failure are celebrated. We are intensely Customer Obsessed, always seeking to bring solutions that surprise and delight the people we serve. We operate as One Microsoft, building on each other's ideas across boundaries. Finally, we are committed to being a Diverse and Inclusive company, ensuring that our workforce reflects the world we serve. We invite you to join us to do the best work of your life and make a lasting, global impact.
                  </p>
                </div>
              </div>
              {arr.length != 1 && (
                <div>
                  <div className="h-0.5 lg:w-160 w-70 mt-10 bg-cyan-300"></div>
                  <div className="mt-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Skills
                    </h1>
                    <div className="mt-5 lg:w-185 w-80 flex gap-x-4 gap-y-2 flex-wrap">
                      {arr.map((data) => (
                        <div>
                          <button className="min-h-10 min-w-30 rounded-full border-2 text-gray-300 border-cyan-200 font-semibold p-2">
                            {data}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <div className="h-0.5 lg:w-160 w-70 mt-10 bg-cyan-300"></div>

                <div className="mt-5 ml-0">
                  <h1
                    className={
                      "text-xl font-semibold text-gray-300"
                    }
                  >
                    Salary
                  </h1>
                </div>
                <div className="flex items-center gap-x-2 m-2 text-gray-300">
                  <p className="font-semibold">Minimum Value : </p>

                  <button className="min-h-4 min-w-30 rounded-full border-2 border-cyan-200 font-semibold p-1 text-gray-300">
                    50000
                  </button>
                </div>
                <div
                  className={
                   "flex items-center gap-x-2 m-2 text-gray-300"
                  }
                >
                  <p className="font-semibold">Maximum Value : </p>

                  <button className="min-h-4 min-w-30 rounded-full border-2 border-cyan-300 font-semibold p-1 text-gray-300">
                    2000000
                  </button>
                </div>
              </div>

              <div className="h-0.5 lg:w-160 w-70 mt-10 bg-cyan-300"></div>
              <div className="h-20 w-full flex justify-center items-center">
                <button className="h-10 w-40 text-black font-bold bg-cyan-300 rounded-xl">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
