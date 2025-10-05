import React, { useState } from "react";
import { useSelector } from "react-redux";
import { setHostSwitch } from "../Redux/Slice/hostSlice/hostSlice";
import Host from "../Host/Host";
const Hero = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  return (
    <div>
      {hostSwitch == "on" && (
        <Host/>
      )}
      <div className={hostSwitch == "on" ? "relative bottom-60 opacity-25" : "opacity-100"}>
        <div
          className={
            "h-125 w-full flex items-center p-10 justify-around z-0"
          }
          style={{ backgroundColor: "rgb(20, 20 , 20)" }}
        >
          <div>
            <div className="flex gap-x-4 text-6xl font-semibold mb-4">
              <h1 className="text-cyan-300">Empower</h1>
              <h1 className="text-gray-300">Your Career</h1>
            </div>
            <div className="w-150 text-lg text-gray-300">
              <p>
                Explore opportunities from across the globe to grow, showcase
                skills, gain CV points & get hired by your dream company.
              </p>
            </div>
          </div>
          <div>
            <img src="../hero_image.png" alt="" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold mt-10 mb-2 ml-15 text-gray-300">
            Jobs
          </h1>
          <p className="text-sm text-gray-300 ml-15 mb-5">
            Find jobs that fit your career aspirations.
          </p>
          <div className="w-full h-70 flex gap-x-4 items-center mx-5">
            <button onClick={() => setCounter1(counter1 - 1)}>
              <img src="less_than_icon.png" alt="" className="h-5 w-3" />
            </button>
            {counter1 <= 0 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru1</p>
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
            )}
            {counter1 <= 1 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
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
            )}
            {counter1 <= 2 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru3</p>
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
            )}
            {
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru4</p>
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
            }
            {counter1 >= 1 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru5</p>
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
            )}
            {counter1 >= 2 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru6</p>
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
            )}
            {counter1 >= 3 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru7</p>
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
            )}
            <button onClick={() => setCounter1(counter1 + 1)}>
              <img src="more_than_icon.png" alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold mt-10 mb-2 ml-15 text-gray-300">
            Internships
          </h1>
          <p className="text-sm text-gray-300 ml-15 mb-5">
            Find the Internships that fit your career aspirations.
          </p>
          <div className="w-full h-70 flex gap-x-4 items-center mx-5">
            <button onClick={() => setCounter2(counter2 - 1)}>
              <img src="less_than_icon.png" alt="" className="h-5 w-3" />
            </button>
            {counter2 <= 0 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru1</p>
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
            )}
            {counter2 <= 1 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
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
            )}
            {counter2 <= 2 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru3</p>
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
            )}
            {
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru4</p>
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
            }
            {counter2 >= 1 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru5</p>
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
            )}
            {counter2 >= 2 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru6</p>
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
            )}
            {counter2 >= 3 && (
              <div
                className="h-60 w-75 rounded-xl border-2 border-cyan-300 p-5"
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
                  <div>
                    <img
                      src="../microsoft_logo.png"
                      alt=""
                      className="h-20 w-20 ml-4"
                    />
                  </div>
                </div>

                <div className="w-70 flex justify-center my-1">
                  <div className="h-0.5 w-70 bg-gray-200 rounded-xl opacity-20"></div>
                </div>

                <div className="flex gap-2 mt-5">
                  <img src="../location_image.png" alt="" className="h-4 w-4" />
                  <p className="text-xs text-gray-300">Bengaluru7</p>
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
            )}
            <button onClick={() => setCounter2(counter2 + 1)}>
              <img src="more_than_icon.png" alt="" className="h-5 w-5" />
            </button>
          </div>

          <div>
            <h1 className="text-4xl text-gray-300 font-semibold mt-10 mb-2 ml-15">
              AI Mock Interview
            </h1>
            <p className="text-sm text-gray-300 ml-15 mb-15">
              Master your concepts with AI-Powered full-length mock tests for
              360° preparation!
            </p>
            <div className="h-80 w-full flex justify-center">
              <div className="h-80 w-110 rounded-2xl border-2 border-gray-300">
                <img
                  src="../ai_mock_interview_image.png"
                  alt=""
                  className="h-60 w-110 rounded-t-2xl border-b-2 border-b-gray-300"
                ></img>
                <div className="h-20 w-110 flex justify-around items-center">
                  <h1 className="text-xl font-semibold text-cyan-300">
                    AI-Driven Mock Interview
                  </h1>
                  <button className="h-10 w-25 rounded-xl bg-cyan-300 text-black font-semibold p-2">
                    Start Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
