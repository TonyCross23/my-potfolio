import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-green-500 font-semibold">
          Hi, This is Tony
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md
                   text-white bg-green-500 hover:bg-green-600 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
