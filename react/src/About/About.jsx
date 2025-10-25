import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { useSelector } from "react-redux";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer/Footer.jsx";
import Host from "../Host/Host.jsx";

const About = () => {
  const hostSwitch = useSelector((state) => state.hostSwitch.value);
  const button = useSelector((state) => state.button.value);
  const titleAndDescription = [
    {
      title: "Jobs & Internship search",
      description:
        "A comprehensive database of opportunities from various industries.",
    },
    {
      title: "AI Mock Interview",
      description:
        "Practice your interview skills with our AI-powered tool, which provides instant feedback.",
    },
    {
      title: "Resume Analysis",
      description:
        "Get an in-depth analysis of your resume with actionable insights to improve it.",
    },
    {
      title: "Measurable results",
      description:
        "Our resume scanner checks your work history section for measurable accomplishments that demonstrate impressive achievements in past roles.",
    },
    {
      title: "Candidate Management",
      description:
        "A comprehensive database of opportunities from various industries.",
    },
  ];
  return (
    <div
      style={{ backgroundColor: "rgb(25,25,25)" }}
      className="min-w-full  min-h-screen"
    >
      <Navbar />
      {hostSwitch == "on" && <Host />}
      <div className="min-w-full  min-h-screen flex flex-col gap-y-[160px] t">
        <div
          className={
            hostSwitch == "on"
              ? button == "on"
                ? "relative bottom-90 opacity-25 z-10 mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-10"
                : "relative bottom-40 opacity-25 z-10 mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-10"
              : button == "on"
              ? "relative bottom-30 opacity-25 z-10 mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-10"
              : "relative top-20 opacity-100 z-10 mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-10"
          }
        >
          <div className="text-cyan-300 mx-8 md:min-w-[40%] flex flex-col font-medium gap-y-6">
            <h2 className="text-2xl sm:text-4xl">About Us</h2>
            <h1 className="text-4xl text-gray-300 sm:text-4xl md:text-5xl leading-tight">
              Where Talent <br className="hidden sm:block" />
              Meets Opportunities
            </h1>
          </div>
          <div className="h-100 rounded-3xl bg-cyan-300 ml-20">
            <div className="h-90 w-10 rounded-t-3xl bg-cyan-300 z-10 relative left-120"></div>
            <div className="h-10 w-120 rounded-b-3xl bg-cyan-300 z-10 relative bottom-5 left-10"></div>
            <div className="h-100 w-140 rounded-3xl z-20 relative bottom-115 right-20">
              <img
                className="rounded-3xl w-full h-56 sm:h-72 md:h-full object-cover"
                src="/internship.png"
                alt="Internship"
              />
            </div>
          </div>
        </div>
        <div className="w-[80%] flex justify-evenly items-center mx-auto">
          <div className="w-[50%] h-[600px]  rounded-2xl  border-t-cyan-300 border-r-cyan-200  border-b-cyan-200 border-b-[8px] border-2 border-l-[8px] border-l-cyan-200 flex flex-col justify-center items-center">
            <h1 className="text-[3rem] text-center  text-cyan-300">
              With SkillSync, <br />
              <div className=" -skew-x-12 text-gray-300">
                Achieve the best you deserve
              </div>
            </h1>
          </div>
          <div className="w-[50%] bg-transparent flex justify-between items-center">
            <section className="mx-auto w-[90%] max-w-4xl py-6 sm:py-8 md:py-15 flex flex-col  items-center text-gray-300">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72">
                <img
                  src="/logo.png"
                  alt="SkillSync logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="mt-3 sm:mt-4 text-center leading-relaxed text-base sm:text-lg md:text-[1.4rem] max-w-prose relative bottom-20 left-10">
                SkillSync is an all-in-one platform designed to bridge the gap
                between job seekers and recruiters. Our platform offers a suite
                of tools to help navigate the career journey, from finding the
                perfect opportunity to acing the interview. For recruiters,
                SkillSync provides a streamlined solution for posting jobs and
                internships, connecting with top-tier talent efficiently.
              </p>
            </section>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col gap-y-3">
          <h1 className="text-cyan-300 font-medium text-4xl text-center mb-10">
            Key Features of our Platform
          </h1>
          <div className="grid grid-cols-4 bg-cyan-100 gap-8 p-10">
            <div
              className="border-2 border-cyan-200 rounded-xl"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <Card
                title={titleAndDescription[0].title}
                description={titleAndDescription[0].description}
              />
            </div>
            <div
              className="border-2 border-cyan-200 rounded-xl"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <Card
                title={titleAndDescription[1].title}
                description={titleAndDescription[1].description}
              />
            </div>
            <div
              className="border-2 border-cyan-200 rounded-xl"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <Card
                title={titleAndDescription[2].title}
                description={titleAndDescription[2].description}
              />
            </div>
            <div
              className="border-2 border-cyan-200 rounded-xl"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <Card
                title={titleAndDescription[3].title}
                description={titleAndDescription[3].description}
              />
            </div>
            <div
              className="border-2 border-cyan-200 rounded-xl"
              style={{ backgroundColor: "rgb(25,25,25)" }}
            >
              <Card
                title={titleAndDescription[4].title}
                description={titleAndDescription[4].description}
              />
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};
export default About;
const Card = ({ title, description }) => {
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-lg border-1 border-white/10 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-50 leading-snug line-clamp-2">
        {title}
      </h1>
      <p className="mt-2 text-sm sm:text-base md:text-[1.05rem] text-cyan-300 leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
};
