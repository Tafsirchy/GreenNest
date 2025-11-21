// import React, { useEffect, useState } from "react";
// import ratings from "../assets/iconRatings.png";
// import dollar from "../assets/dollar-symbol.png";
// import { Link } from "react-router";

// const IndoorPlants = () => {
//   const [indoorPlants, setIndoorPlants] = useState([]);

//   useEffect(() => {
//     fetch("plants.json")
//       .then((res) => res.json())
//       .then((data) => setIndoorPlants(data))
//       .catch((error) => console.log(error));
//   }, []);
//   // console.log(indoorPlants);

//   return (
//     <div className="py-10 bg-[#B0CE8880]">
//       <h1 className=" text-5xl font-bold text-center pb-10">
//         Top Rated Indoor Plants
//       </h1>
//       <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 ">
//         {indoorPlants.map((plant) => (
//           <div className="card bg-base-200 shadow-sm ">
//             <figure>
//               <img
//                 src={plant.image}
//                 className="h-60 w-full object-cover px-5 pt-5 rounded-2xl"
//               />
//             </figure>

//             <div className="card-body">
//               <h2 className="card-title mb-2">
//                 {plant.plantName}
//                 <div className="badge badge-secondary">NEW</div>
//               </h2>

//               <div className="card-actions justify-between items-center space-y-3 ">
//                 <div className="bg-[#e5f7be] font-bold text-xl p-1 lg:py-2 lg:px-3 text-[#244f03] rounded-lg flex items-center gap-1 ">
//                   <img className="w-5 h-5" src={dollar} alt="" />
//                   {plant.price}
//                 </div>
//                 <div className="bg-[#fff0e1] p-1 lg:py-2 lg:px-3 text-[#ff8811] rounded-lg flex items-center gap-1  font-bold text-xl">
//                   <img className="w-5 h-5" src={ratings} alt="" />
//                   {plant.rating}
//                 </div>
//               </div>
//               <div className="btn btn-warning text-white">
//                 <Link>View Details</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndoorPlants;
