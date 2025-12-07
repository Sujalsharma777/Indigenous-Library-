import { Plus } from 'lucide-react'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const fab = () => {
    const handlesubmit =  (e)=>{
e.preventDefault()
 const phoneNumber = '+919993718898'; // Replace with your WhatsApp number (with country code)
        const encodedMessage = "I want to join the library seat";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
  }
  return (
<div className="fab">
  {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
  <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary"><Plus className='text-3xl text-bold '/></div>

  {/* buttons that show up when FAB is open */}
 <a onClick={handlesubmit} ><FaWhatsapp  className='btn btn-lg btn-circle text-3xl text-white bg-green-600 p-2 hover:scale-110'/></a>
  <a href="https://maps.app.goo.gl/LkSpEoYNrbtsuB8z5 " target="_blank" ><FaLocationDot  className='btn btn-lg btn-circle text-3xl text-white bg-orange-700 p-2  hover:scale-110'/></a>
 
</div>  )
}

export default fab