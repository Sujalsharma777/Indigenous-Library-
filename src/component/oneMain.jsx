import React from 'react'
import img1 from '../assets/lib-room2.jpeg'

import { motion } from 'framer-motion'
const oneMain = () => {
  return (
   <motion.div initial={{opacity:0, x:-100 }} whileInView={{opacity:1 , x:0}} transition={{duration:1}}       viewport={{ once: true, amount: 0.5 }}  className="flex justify-center items-center bg-base-200 sm:p-20  p-10">
  <div className="flex flex-col sm:flex-row ">
   <img
      src={img1}
      className="max-w-sm sm:max-w-xl rounded-lg shadow-2xl"
    />
    <div className='px-5 py-5'>
      <h1 className="sm:text-3xl text-2xl font-bold sm:text-left text-center ">Study Desks </h1>
      <p className="py-6 ">
      A study desk designed for independent learning, offering organized storage, comfortable space, focused lighting, and a quiet atmosphere that encourages concentration, efficiency, and steady progress during long hours of self-study.

      </p>  
    </div>
  </div>
</motion.div>
  )
}

export default oneMain