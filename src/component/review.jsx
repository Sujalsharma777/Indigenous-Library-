import React, { useRef, useState } from "react";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const review = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="flex items-center justify-center    bg-white rounded-2xl shadow-md "
    >
      {/* First reviews  */}
      <SwiperSlide className=" py-2 px-2">
        <div className="pt-5 font-semibold py-10 px-5 text-2xl text-left">
          <q className="text-black">
            {" "}
            Supportive space that boosts focus, encourages teamwork, and
            improves learning.
          </q>{" "}
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="avatar">
            <div className="w-20  rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <h1 className="text-md font-medium underline underline-offset-2 text-black">
            Rohit Sharma{" "}
          </h1>
        </div>
        <div className="rating rating-xs flex justify-center">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
          />
        </div>
      </SwiperSlide>
      {/* First reviews  */}
      <SwiperSlide className="swiper-slide  bg-white rounded-2xl shadow-md py-2 px-2">
        <div className="pt-5 font-semibold py-10 px-5 text-2xl text-left">
          <q className="text-black">
            {" "}
            Quiet, comfortable room that makes studying easier and more
            enjoyable.
          </q>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="avatar">
            <div className="w-20  rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <h1 className="text-md font-medium underline underline-offset-2 text-black">
            Prakash{" "}
          </h1>
        </div>
        <div className="rating rating-xs flex justify-center">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-5"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
            defaultChecked
          />
        </div>
      </SwiperSlide>{" "}
      {/* First reviews  */}
      <SwiperSlide className="swiper-slide  bg-white rounded-2xl shadow-md py-2 px-2">
        <div className="pt-5 font-semibold py-10 px-5 text-2xl text-left">
          <q className="text-black">
            {" "}
            Great study environment with calm vibes and helpful peer
            interaction.
          </q>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="avatar">
            <div className="w-20  rounded-full">
              <img src={avatar} />
            </div>
          </div>
          <h1 className="text-md font-medium underline underline-offset-2 text-black">
            Nitin Viyas{" "}
          </h1>
        </div>
        <div className="rating rating-xs flex justify-center">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default review;
