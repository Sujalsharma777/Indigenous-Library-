import { div } from 'framer-motion/client'
import { Dice1 } from 'lucide-react'
import React from 'react'

const Enquiry = () => {
  return (
    <div className='' id='Enquire'>
    <fieldset className="fieldset  border-base-300 rounded-box sm:w-md w-sm h-full border p-4 bg-white ">
  <legend className="fieldset-legend text-2xl">Enquire</legend>

  <label className="label">Name</label>
  <input type="email" className="input" placeholder="Enter your name" />

  <label className="label">Mobile Number</label>
  <input type="tel" className="input" placeholder="+91" />
   <label className="label">Message</label>
<textarea name="message" id="message" className="input" placeholder='Message'></textarea>

  <button className="btn btn-neutral mt-4">Submit</button>
</fieldset> 
</div>
  )
}

export default Enquiry