import React from "react";
import avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

const review = () => {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex justify-baseline items-center bg-base-200  py-10 px-20"
    >
      <div className="flex sm:flex-row flex-col gap-2 ">
        {/* First reviews  */}
        <div className="bg-white rounded-2xl shadow-md py-5 px-2">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <h1>Rohit Sharma </h1>
          </div>
          <div className="rating rating-sm">
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
          <div className="pt-5">
            Supportive space that boosts focus, encourages teamwork, and
            improves learning.
          </div>
        </div>
        {/* First reviews  */}
        <div className="bg-white rounded-2xl shadow-md py-5 px-2">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <h1>Prakash </h1>
          </div>
          <div className="rating rating-sm">
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
          <div className="pt-5">
            Quiet, comfortable room that makes studying easier and more
            enjoyable.
          </div>
        </div>{" "}
        {/* First reviews  */}
        <div className="bg-white rounded-2xl shadow-md py-5 px-2">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <h1>Nitin Viyas </h1>
          </div>
          <div className="rating rating-sm">
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
          <div className="pt-5">
            Great study environment with calm vibes and helpful peer
            interaction.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default review;
