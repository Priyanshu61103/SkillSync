import React from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Host from "../Host/Host";

const Details = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const details = useSelector((state) => state.details.value);
  console.log(details);
  let str = details.payload.skills;
  let arr = [];
  let newStr = "";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ",") newStr += str[i];
    else {
      arr[index] = newStr;
      index++;
      newStr = "";
    }
  }
  console.log(arr);
  return (
    <div
      className="h-700 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      <div className={
          hostSwitch == "on"
            ? button == "on"
              ? "relative bottom-110 opacity-25 z-10"
              : "relative bottom-60 opacity-25 z-10"
            : button == "on"
            ? "relative bottom-50 z-10 opacity-25"
            : "opacity-100 z-10"
        }>
        <div className="relative top-25">
          <h1 className="text-cyan-300 text-center text-2xl font-bold">
            {details.payload.title}
          </h1>
          <div className="w-full min-h-400 flex justify-center mt-10 lg:mb-10 mb-40">
            <div className="lg:w-200 w-100 h-fit border-2 border-cyan-400 p-10 pl-12 rounded-4xl">
              <div className="h-8 w-40 rounded-xl border-2 border-cyan-300 text-gray-300 text-sm flex gap-x-2 justify-center items-center mb-5">
                <img src="../target_icon.png" alt="" className="h-8 w-7" />
                <p>Actively Hiring</p>
              </div>
              <div className="flex h-20 gap-5 items-center">
                <div className="flex h-20 w-20 rounded-full bg-white gap-x-2 items-center justify-around mb-5">
                  <img
                    src={details.payload.imageUrl}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h1
                    className={
                      "lg:text-3xl text-lg text-gray-300 font-semibold"
                    }
                  >
                    {details.payload.company}
                  </h1>
                  <p
                    className={
                      "lg:text-lg text-xs font-semibold text-gray-300 mb-5"
                    }
                  >
                    {details.payload.domain} Role
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
                    {details.payload.location}
                  </p>
                </div>
                <div>
                  <button className="h-7 w-40 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img src="../date_icon.png" alt="" className="h-5 w-8" />
                    <p className="lg:text-md text-sm font-semibold text-gray-300">
                      START DATE
                    </p>
                  </button>
                  <h1 className="lg:text-md text-sm font-semibold text-gray-300  w-40 text-center">
                    {details.payload.startDate}
                  </h1>
                </div>

                <div>
                  <button className="h-7 w-32 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img src="../company_logo.png" alt="" className="h-5 w-5" />
                    <p className="text-md font-semibold text-gray-300">MODE</p>
                  </button>
                  <h1
                    className={
                      "text-md font-semibold text-gray-300  w-32 text-center"
                    }
                  >
                    {details.payload.modeOfInternship}
                  </h1>
                </div>

                <div>
                  <button className="h-7 w-32 border-2 border-cyan-300 flex gap-x-2 rounded-full justify-center items-center">
                    <img src="../date_icon.png" alt="" className="h-5 w-5" />
                    <p className="text-md font-semibold text-gray-300">
                      APPLY BY
                    </p>
                  </button>
                  <h1
                    className={
                      "text-md font-semibold text-gray-300 w-32 text-center"
                    }
                  >
                    {details.payload.applyBy}
                  </h1>
                </div>
              </div>
              <div>
                <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>
                <div className="m-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    About
                  </h1>
                  <p className={"text-gray-300 mt-5 text-md font-medium"}>
                    {details.payload.about}
                  </p>
                </div>
              </div>
              <div>
                <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>
                <div className="m-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    Description
                  </h1>
                  <p className={"text-gray-300 mt-5 text-md font-medium"}>
                    {details.payload.description}
                  </p>
                </div>
                <div>
                  <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>
                  <div className="m-5 ml-0">
                    <h1 className={"text-xl font-semibold text-gray-300"}>
                      Eligiblity
                    </h1>
                    <p className={"text-gray-300 mt-5 text-md font-medium"}>
                      {details.payload.eligibility}
                    </p>
                  </div>
                </div>
              </div>
              {arr.length > 1 && (
                <div>
                  <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>
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
                <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>

                <div className="mt-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    Salary
                  </h1>

                  <button className="text-md font-semibold text-gray-300 mt-2 border-2 border-cyan-300 rounded-full min-h-10 min-w-30 p-2 mt-4">
                    {details.payload.stipend}
                  </button>
                </div>
              </div>

              <div>
                <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>

                <div className="mt-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    Duration
                  </h1>

                  <button className="text-md font-semibold text-gray-300 border-2 border-cyan-300 rounded-full min-h-10 min-w-30 p-2 mt-4">
                    {details.payload.duration}
                  </button>
                </div>
              </div>

              <div>
                <div className="h-0.5 lg:w-170 w-70 mt-10 bg-cyan-300"></div>

                <div className="mt-5 ml-0">
                  <h1 className={"text-xl font-semibold text-gray-300"}>
                    Number of Openings
                  </h1>

                  <button className="text-md font-semibold text-gray-300 border-2 border-cyan-300 rounded-full min-h-10 min-w-30 mt-4">
                    {details.payload.numberOfOpenings}
                  </button>
                </div>
              </div>

              <div className="h-0.5 lg:w-170 w-70 mt-7 bg-cyan-300"></div>
              <div className="h-20 w-full flex justify-center items-center">
                <button className="h-10 w-40 text-black font-bold bg-cyan-300 rounded-4xl p-5 flex items-center justify-center">
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
