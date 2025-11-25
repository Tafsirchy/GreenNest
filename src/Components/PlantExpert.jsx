import React, { useEffect, useState } from "react";
import { Sprout } from "lucide-react";
import Loading from "./Loading";

const PlantExpert = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data);
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
    <div className="py-10 bg-[#F5F0E1] hover:bg-[#F5F0E120] transition-colors duration-1000">
      <h1 className="text-5xl font-semibold text-center text-[#2F4F2F] pb-10">
        Meet Our Green Experts
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="card bg-[#FAF5EF] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-2xl"
          >
            <figure>
              <img
                src={expert.img}
                className="h-60 w-full object-cover rounded-t-2xl"
                alt={expert.name}
              />
            </figure>
            <div className="card-body text-[#2F4F2F]">
              <h2 className="text-xl font-bold mb-2">{expert.name}</h2>
              <p className="text-[#5B5B3A]">{expert.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantExpert;
