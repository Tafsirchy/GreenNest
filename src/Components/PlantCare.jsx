import { GiFertilizerBag, GiSun, GiWateringCan } from "react-icons/gi";

const PlantCare = () => {
  return (
    <div className="pb-10 bg-[#B0DB9C]">
      <h1 className="text-5xl text-black font-bold text-center py-10">
        Plant Care Tips
      </h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center ">
        {/* Watering */}
        <div className="h-full bg-base-100 rounded-xl  p-6 border border-blue-800 shadow-2xl ">
          <GiWateringCan className="w-20 h-20 text-blue-500 " />
          <h2 className="text-2xl font-semibold text-purple-900 my-2">
            Watering
          </h2>
          <p className="text-gray-700">
            Maintain soil moisture, ensuring it's never waterlogged, as this is
            crucial for root health. Adjust watering practices carefully based
            on the current season and the specific needs of your plant type to
            promote optimal growth and prevent over-saturation.
          </p>
        </div>

        {/* Sunlight */}
        <div className="h-full bg-base-100 rounded-xl p-6 border border-blue-800 shadow-2xl">
          <GiSun className="w-20 h-20 text-yellow-500" />
          <h2 className="text-2xl font-semibold text-purple-900 my-2">
            Sunlight
          </h2>
          <p className="text-gray-700">
            Most indoor plants flourish best when placed in an area that
            receives bright, indirect sunlight, such as near an east or
            west-facing window. This light provides sufficient energy for growth
            without the harsh intensity of direct rays, which can scorch their
            leaves.
          </p>
        </div>

        {/* Fertilizing */}
        <div className="h-full bg-base-100 rounded-xl  p-6 border border-blue-800 shadow-2xl">
          <GiFertilizerBag className="w-20 h-20 text-green-600 " />
          <h2 className=" text-2xl font-semibold text-purple-900 my-2">
            Fertilizing
          </h2>
          <p className="text-gray-700">
            During the active growing season, typically spring and summer,
            consistently feed your plants with a balanced, complete fertilizer.
            Apply this nutrient solution every two to four weeks to ensure they
            receive the essential elements needed for robust foliage and healthy
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlantCare;
