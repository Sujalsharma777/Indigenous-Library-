import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const socialMedia = () => {
    const handlesubmit =  (e)=>{
e.preventDefault()
 const phoneNumber = '+919993718898'; // Replace with your WhatsApp number (with country code)
        const encodedMessage = "I want to join the library seat";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
  }
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 justify-center  items-center   p-10 bg-white rounded-2xl shadow-md ">
        
          <a href="" target="_blank" rel="noopener noreferrer" onClick={handlesubmit} className=" text-7xl hover:scale-105 p-10 text-green-600">
            <FaSquareWhatsapp />
          </a>
          <a href="https://youtube.com/@indigenious_library?si=kokbe8dOpT0mQHRm" target="_blank" rel="noopener noreferrer" className="text-7xl hover:scale-105 p-10 text-red-600">
            <FaYoutube />
          </a>
     
          <a href="https://www.facebook.com/share/1CyHDvdJGu/" target="_blank" rel="noopener noreferrer" className="text-7xl hover:scale-105 p-10 text-blue-600">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/indigenious_library?igsh=MmE3NmphcGVmMXEz" target="_blank" rel="noopener noreferrer" className="text-7xl hover:scale-105 p-10 text-pink-600">
            <FaInstagramSquare />
          </a>
       
      </div>
    </>
  );
};

export default socialMedia;
