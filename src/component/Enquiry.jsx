import { div } from 'framer-motion/client'
import { Dice1 } from 'lucide-react'
import React, { useState } from 'react'

const Enquiry = () => {
  const [name, setname] = useState("")
  const [number, setnumber] = useState("")
  const [message, setmessage] = useState("")
    
    const handlesubmit =  (e)=>{
  e.preventDefault()
  const phoneNumber = '+919993718898'; // Replace with your WhatsApp number (with country code)
          const encodedMessage = encodeURIComponent(`Name: ${name}\nnumber: ${number}\nMessage: ${message}`);
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
          window.open(whatsappUrl, '_blank');
    }
  return (
    <div className='' id='Enquire' className="">
    <form className="fieldset  border-base-300 rounded-box sm:w-md w-sm h-full border p-4 dark:bg-base-100 bg-white " onSubmit={handlesubmit}>
  <legend className="fieldset-legend text-2xl">Enquire</legend>

  <label className="label">Name</label>
  <input type="text" className="input" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)}/>

  <label className="label">Mobile Number</label>
  <input type="tel" className="input" placeholder="+91"  value={number} onChange={(e) => setnumber(e.target.value)}/>
   <label className="label">Message</label>
<textarea name="message" id="message" className="input" placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>

  <button className="btn btn-neutral mt-4">Submit</button>
</form> 
</div>
  )
}

export default Enquiry