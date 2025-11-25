import { div } from "framer-motion/client";
import React from "react";
import Enquiry from "./Enquiry";
const map = () => {
  return (
    <div className="flex sm:flex-row justify-around items-center bg-base-200 flex-col " >

  <Enquiry/>
    <div className="flex justify-center items-center w-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.151109625971!2d75.4203569752907!3d23.455013200052353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396475844c409553%3A0x11faea81da74f857!2zaW5kaWdlbmlvdXMgTGlicmFyeSDgpIfgpILgpKHgpL_gpJzgpL_gpKjgpL_gpK_gpLgg4KSy4KS-4KSH4KSs4KWN4KSw4KWH4KSw4KWAIChDby1zdHVkeSBhbmQgU2VsZiBTdHVkeSBMaWJyYXJ5IGluIE5hZ2RhKSB8IEJlc3RMaWJyYXJ5aW5OYWdkYUBpbmRpZ2VuaW91c19saWJyYXJ5!5e0!3m2!1sen!2sin!4v1763992345654!5m2!1sen!2sin"
      className="w-2xl h-98 "
       
       
      ></iframe>
    </div>
      </div>
  );
};

export default map;
