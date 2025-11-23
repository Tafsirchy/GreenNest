import React from "react";
import pow from "../assets/Alovera.jpg";
import { Leaf } from "lucide-react";

const PlantOfTheWeek = () => {
  return (
    <div className="bg-[#F5F0E1]  hover:bg-[#F5F0E120] transition-colors duration-1000 py-10">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="flex items-center justify-center gap-3 text-4xl font-semibold text-[#2F4F2F]">
          <Leaf className="w-12 h-12 text-[#8FA373] animate-bounce" />
          Plant Of The Week
        </h1>
      </div>

      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-auto h-[300px] lg:w-[500px] lg:h-[500px] rounded-2xl shadow-md transform transition-transform duration-700 hover:scale-105 hover:translate-x-2 object-cover"
            src={pow}
            alt="Aloe Vera"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-[#2F4F2F]">
          <h2 className="text-3xl font-bold mb-3">Aloe Vera</h2>
          <p className="text-[#5B5B3A] mb-5">
            Aloe vera is a resilient succulent with gel-filled leaves, widely
            valued for soothing burns, hydrating skin, and supporting healing.
            Minimal care needed, perfect for eco-friendly homes.
          </p>
          <button className="px-12 py-3 bg-[#A3B18A] text-[#F5F0E1] rounded-lg font-semibold hover:bg-[#8FA373] transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
