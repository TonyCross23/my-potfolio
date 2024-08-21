import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-green-500 font-semibold">
          Hi, I'm TonyCross
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-500 dark:text-gray-400">
          I'm Backend Wed Developer,A motivated and versatile Full-Stack Web Developer with expertise in both frontend and backend technologies. Proficient in creating dynamic, responsive web applications from concept to deployment. 
        </p>
      <a
          href="#works"
          className="inline-block px-5 py-3 border-transparent text-base font-medium rounded-md
                   text-white bg-green-500 hover:bg-green-600 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}


export default HeroSection;
