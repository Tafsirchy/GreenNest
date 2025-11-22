import { Sprout } from "lucide-react";
import React, { useEffect, useState } from "react";

const PlantExpert = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="py-10 bg-[#658C58]">
      <h1 className="text-white text-5xl font-bold text-center pb-10">
        Meet Our Green Experts
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2i lg:grid-cols-4 gap-5 ">
        {experts.map((expert) => (
          <div className="card bg-base-200 shadow-lg ">
            <figure>
              <img src={expert.img} className="h-60 w-full object-cover" />
            </figure>

            <div className="card-body">
              <h2 className="text-emerald-900 card-title mb-2 text-xl font-bold">
                {expert.name}
              </h2>

              <p className="text-gray-600">{expert.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantExpert;
