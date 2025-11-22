import React from "react";
import pow from "../assets/Alovera.jpg";
import { Leaf } from "lucide-react";

const PlantOfTheWeek = () => {
  return (
    <div className="bg-[#4C763B] hover:bg-[#4C763B80] transition-colors duration-500">
      <div className="w-11/12 mx-auto min-h-screen py-5">
        {/* Header */}
        <h1 className="flex flex-row justify-center items-center gap-3 text-white mb-10">
          <Leaf className="w-12 h-12 text-green-600 animate-bounce" />
          <span className="text-5xl font-bold text-center py-3">
            Plant Of The Week
          </span>
        </h1>

        {/* Content */}
        <div className="text-white w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-10 p-5">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              className="w-auto h-[300px] lg:w-[500px] lg:h-[500px] shadow-2xl rounded-2xl object-cover transform transition-transform duration-700 hover:translate-x-3 hover:scale-105"
              src={pow}
              alt="Aloe Vera"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl font-semibold transform transition-transform duration-700 hover:translate-x-2">
              Aloe Vera
            </h1>
            <p className="mt-3 text-white hover:font-semibold transform transition-transform duration-1100 hover:translate-x-2 hover:scale-105 ">
              Aloe vera is a resilient succulent known for its thick, gel-filled
              leaves. Widely valued for soothing burns, hydrating skin, and
              supporting healing, it grows easily in warm, sunny environments.
              Aloe requires minimal care, making it a popular household plant
              for natural remedies, skincare benefits, and air-purifying
              qualities.
            </p>
            <div className="pt-5">
              <button className="px-12 btn btn-warning hover:btn-info text-white transform transition-transform duration-700 hover:scale-105 hover:translate-y-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
