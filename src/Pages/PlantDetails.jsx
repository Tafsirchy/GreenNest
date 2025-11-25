import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Leaf, LeafIcon } from "lucide-react";
import { FaLeaf } from "react-icons/fa";
import price from "../assets/dollar.png";
import available from "../assets/tree.png";
import ratings from "../assets/star.png";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((item) => item.plantId == id);
        setPlant(foundPlant);
      });
  }, [id]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#F5F0E1] ">
        <div className="w-11/12 mx-auto  py-10">
          {plant ? (
            <div className="py-10">
              {/* Title Section */}
              <div className="text-center mb-10">
                <h1 className="flex items-center justify-center gap-3 text-4xl font-semibold text-[#2F4F2F]">
                  <FaLeaf className="w-12 h-12 text-[#8FA373] animate-bounce [animation-duration:2s] " />
                  {plant.plantName}
                </h1>
              </div>

              <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img
                    className="w-auto h-[300px] lg:w-[500px] lg:h-[500px] rounded-2xl shadow-md transform transition-transform duration-700 hover:scale-105 hover:translate-x-2 object-cover"
                    src={plant.image}
                    alt="Aloe Vera"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left text-[#2F4F2F]">
                  <p className="text-[#5B5B3A] text-2xl mb-5 font-semibold">
                   {plant.description}
                  </p>
                  <div className=" flex justify-between items-center gap-10 pb-10 font-semibold">
                    <div className="flex justify-center items-center gap-3">
                      <img className="w-10 h-10" src={price} alt="" />
                      <p className="text-2xl font-bold"> {plant.price}$</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <img className="w-10 h-10" src={ratings} alt="" />
                      <p className="text-2xl font-bold"> {plant.rating} </p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                      <img className="w-10 h-10" src={available} alt="" />
                      <p className="text-2xl font-bold">
                        {" "}
                        {plant.availableStock}
                      </p>
                    </div>
                  </div>
                  <Link to="/consultation" className="bg-[#043915] px-12 py-3 text-white rounded-lg font-semibold hover:bg-[#8FA373] transition-all hover:duration-500">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <span className="loading loading-ring loading-md"></span>
            </div>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PlantDetails;
