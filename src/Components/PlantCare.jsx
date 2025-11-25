import { GiFertilizerBag, GiSun, GiWateringCan } from "react-icons/gi";
import { motion } from "framer-motion";

const PlantCare = () => {
  return (
    <div className="pb-10 bg-[#F5F0E1] hover:bg-[#F5F0E120] transition-colors duration-1000">
      <h1 className="text-5xl font-semibold text-center text-[#2F4F2F] py-10">
        Plant Care Tips
      </h1>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-[#FAF5EF] rounded-xl p-6 shadow-md hover:shadow-lg "
        >
          <GiWateringCan className="w-20 h-20 text-[#8FA373]" />
          <h2 className="text-2xl font-semibold text-[#2F4F2F] my-2">
            Watering
          </h2>
          <p className="text-[#2F4F2F]">
            Keep soil moist but not waterlogged. Adjust watering based on season
            and plant type for healthy growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-[#FAF5EF] rounded-xl p-6 shadow-md hover:shadow-lg"
        >
          <GiSun className="w-20 h-20 text-[#A3B18A]" />
          <h2 className="text-2xl font-semibold text-[#2F4F2F] my-2">
            Sunlight
          </h2>
          <p className="text-[#2F4F2F]">
            Place plants in bright, indirect sunlight. Avoid harsh direct rays.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-[#FAF5EF] rounded-xl p-6 shadow-md hover:shadow-lg"
        >
          <GiFertilizerBag className="w-20 h-20 text-[#8FA373]" />
          <h2 className="text-2xl font-semibold text-[#2F4F2F] my-2">
            Fertilizing
          </h2>
          <p className="text-[#2F4F2F]">
            Feed plants every 2–4 weeks during spring and summer with balanced
            fertilizer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantCare;
