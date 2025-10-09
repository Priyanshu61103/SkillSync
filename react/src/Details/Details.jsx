import React from "react";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Details = () => {
  return (
    <div
      className="h-1100 w-full text-white"
      style={{ backgroundColor: "rgb(25,25,25)" }}
    >
      <Navbar />
      <div className="h-900 w-full flex justify-center mt-10">
        <div className="h-900 w-200 border-2 border-cyan-300 rounded-xl"></div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Details;
