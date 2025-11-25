import React, { useEffect, useState } from "react";
import ratings from "../assets/iconRatings.png";
import dollar from "../assets/dollar-symbol.png";
import { Link } from "react-router";
import Loading from "./Loading";

const IndoorPlants = () => {
  const [indoorPlants, setIndoorPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("plants.json")
      .then((res) => res.json())
      .then((data) => {
        setIndoorPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#F5F0E1] min-h-screen">
      <h1 className="text-5xl font-semibold text-center text-[#2F4F2F] pb-10">
        Top Rated Indoor Plants
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indoorPlants.map((plant) => (
          <div
            key={plant.plantId}
            className="card bg-[#FAF5EF] shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl"
          >
            <figure>
              <img
                src={plant.image}
                className="h-60 w-full object-cover rounded-t-2xl"
                alt=""
              />
            </figure>

            <div className="card-body text-[#2F4F2F]">
              <h2 className="card-title mb-2 text-2xl">
                {plant.plantName}
                <div className="badge badge-secondary bg-[#A3B18A] text-[#F5F0E1]">
                  NEW
                </div>
              </h2>

              <div className="card-actions justify-between items-center space-y-2">
                <div className="bg-[#E6E2D3] font-bold text-lg px-3 py-2 rounded-lg flex items-center gap-1 text-[#2F4F2F]">
                  <img className="w-5 h-5" src={dollar} alt="" />
                  {plant.price}
                </div>

                <div className="bg-[#E6E2D3]/80 px-3 py-2 text-[#2F4F2F] rounded-lg flex items-center gap-1 font-bold text-lg">
                  <img className="w-5 h-5" src={ratings} alt="" />
                  {plant.rating}
                </div>
              </div>

              <div className="mt-4">
                <Link
                  to={`/plantDetails/${plant.plantId}`}
                  className="btn w-full bg-[#A3B18A] text-[#F5F0E1] hover:bg-[#7f9167] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoorPlants;
