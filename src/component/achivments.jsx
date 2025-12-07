import React from "react";
import Achivement from "../assets/ach.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const achivments = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper    bg-white rounded-2xl shadow-md  "
    >
      <SwiperSlide className="flex justify-center  items-center  p-5   ">
        <div className="py-5 flex justify-center  ">
          <img
            src={Achivement}
            alt="image"
            className="max-w-40 object-cover "
          />
        </div>
        <div className="text-center font-semibold text-md text-black">
         <q> Clearing the UPSC exam reflects strong dedication, guided by the
          library’s supportive environment that nurtured focused study,
          motivation, and growth.</q>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center  items-center  p-5    flex-col bg-white rounded-2xl shadow-md ">
        <div className="py-5 flex justify-center  ">
          <img
            src={Achivement}
            alt="image"
            className="w-50 h-40  object-cover"
          />
        </div>
        <div className="text-center font-semibold text-md text-black">
         <q> Clearing the UPSC exam reflects strong dedication, guided by the
          library’s supportive environment that nurtured focused study,
          motivation, and growth.</q>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center  items-center  p-5    flex-col bg-white rounded-2xl shadow-md ">
        <div className="py-5 flex justify-center  ">
          <img
            src={Achivement}
            alt="image"
            className="w-50 h-40  object-cover"
          />
        </div>
        <div className="text-center font-semibold text-md text-black">
         <q> Clearing the UPSC exam reflects strong dedication, guided by the
          library’s supportive environment that nurtured focused study,
          motivation, and growth.</q>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default achivments;
