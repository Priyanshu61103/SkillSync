import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";

import Testimonials from "../Testimonials/Testimonials.jsx";
import Footer from "../Footer/Footer.jsx";

const About = () => {
    const titleAndDescription = [{
        title: "Jobs&Internship search",
        description: "A comprehensive database of opportunities from various industries."
    },
        {
            title: "AI Mock Interview",
            description: "Practice your interview skills with our AI-powered tool, which provides instant feedback."
        },
        {
            title: "Resume Analysis",
            description: "Get an in-depth analysis of your resume with actionable insights to improve it."
        },
        {
            title: "Jobs&Internship Posting",
            description: "Easily post your open positions and reach a wide audience of qualified candidates."
        },
        {
            title: "Candidate Management",
            description: "A comprehensive database of opportunities from various industries."
        }];
    return (
        <div
            style={{ backgroundColor: "rgb(20, 20 , 20)" }}
            className="min-w-full  min-h-screen flex flex-col gap-y-[160px] t ">
            <Navbar/>
            <div
                className="animate-in fade-in slide-in-from-bottom-5 duration-800 w-[90%]  mx-auto flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-8 md:gap-10">
                <div className="text-amber-50 md:min-w-[40%] flex flex-col font-medium gap-y-6">
                    <h2 className="text-2xl sm:text-4xl">About Us</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Where Talent <br className="hidden sm:block"/>
                        Meets Opportunities
                    </h1>

                </div>

                <div className="w-full md:max-w-[50%]">
                    <img
                        className="rounded-b-3xl rounded-l-3xl w-full h-56 sm:h-72 md:h-full object-cover"
                        src="/internship.png"
                        alt="Internship"
                    />
                </div>
            </div>
            <div className="w-[80%] flex justify-evenly items-center mx-auto">
                <div
                    className="w-[50%] h-[600px]  rounded-2xl  border-t-cyan-300 border-r-cyan-200  border-b-cyan-200 border-b-[8px] border-2 border-l-[8px] border-l-cyan-200 flex flex-col justify-center items-center">
                    <h1 className="text-[3rem] text-center  text-amber-50">With SkillSync, <br/>
                        <div className=" -skew-x-12 text-amber-100/90">Achieve the best you deserve</div>
                    </h1>
                </div>
                <div className="w-[50%] bg-transparent flex justify-between items-center">
                    <section
                        className="mx-auto w-[90%] max-w-4xl py-6 sm:py-8 md:py-15 flex flex-col  items-center text-amber-50">

                        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72">
                            <img
                                src="/logo.png"
                                alt="SkillSync logo"
                                className="w-full h-full object-contain"
                            />
                        </div>


                        <p className="mt-3 sm:mt-4 text-center leading-relaxed text-base sm:text-lg md:text-[1.4rem] max-w-prose">
                            SkillSync is an all-in-one platform designed to bridge the gap between job seekers and
                            recruiters. Our platform offers a suite of tools to help navigate the career journey, from
                            finding the perfect opportunity to acing the interview. For recruiters, SkillSync provides a
                            streamlined solution for posting jobs and internships, connecting with top-tier talent
                            efficiently.
                        </p>
                    </section>
                </div>


            </div>
            <div className="w-[80%] mx-auto flex flex-col gap-y-3">
                <h1 className="text-amber-50 font-medium text-2xl">Key Features of our Platform</h1>
                <div className="grid grid-cols-4 gap-8">
                    <Card title={titleAndDescription[0].title} description={titleAndDescription[0].description}/>
                    <Card title={titleAndDescription[1].title} description={titleAndDescription[1].description}/>
                    <Card title={titleAndDescription[2].title} description={titleAndDescription[2].description}/>
                    <Card title={titleAndDescription[3].title} description={titleAndDescription[3].description}/>
                    <Card title={titleAndDescription[4].title} description={titleAndDescription[4].description} />
                </div>
            </div>
            <div className="w-[95%]">
                <div>
            <Testimonials/>
                </div>
            </div>
            <div className="w-[100%] flex justify-center items-center">
                <div>
                <Footer/>
                </div>
            </div>
        </div>
    )
}
export default About
const Card = ({ title, description }) => {
    return (
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-lg border-1 border-white/10 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-50 leading-snug line-clamp-2">
                {title}
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-[1.05rem] text-cyan-300 leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    );
};
