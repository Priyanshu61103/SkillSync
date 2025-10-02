import React from "react";

const Hero = () => {
  return (
    <div className="h-125 w-full flex items-center p-10 justify-around"  style={{ backgroundColor: "rgb(20, 20 , 20)" }}>
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
        <img src="../hero_image.png" alt=""/>
      </div>
    </div>
  );
};

export default Hero;
