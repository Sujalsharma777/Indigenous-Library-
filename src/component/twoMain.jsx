import React from 'react'
import img2 from "../assets/room.jpeg"
import { motion } from 'framer-motion'

const twoMain = () => {
  return (
     <motion.div initial={{opacity:0, x:100 }} whileInView={{opacity:1 , x:0}} transition={{duration:1}}       viewport={{ once: true, amount: 0.5 }}  className="flex justify-center items-center  p-20">
      <div className="flex  flex-col-reverse sm:flex-row ">
      
        <div className='p-5'> 
          <h1 className="sm:text-3xl text-2xl font-bold sm:text-right items-center">Group Discussion Room </h1>
          <p className="py-6 ">
           A dedicated group discussion room designed for focused self-study, encouraging collaborative dialogue, quiet reflection, shared learning resources, and supportive interaction in a calm environment that strengthens understanding and academic growth.

          </p>  
        </div>
          <img
          src={img2}
          className="max-w-sm sm:max-w-xl rounded-lg shadow-2xl"
        />
      </div>
    </motion.div>
  )
}

export default twoMain