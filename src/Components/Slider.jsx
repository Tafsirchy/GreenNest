import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import p1 from "../assets/Aristotle_Quote.jpeg"
import p2 from "../assets/maxresdefault.jpg";
import p3 from  "../assets/gg-photo.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <img className="w-full h-[380px]" src={p1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[380px]" src={p2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[380px]" src={p3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
