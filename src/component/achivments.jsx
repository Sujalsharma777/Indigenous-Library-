import React from 'react'
import Achivement from '../assets/ach.jpeg'
const achivments = () => {
  return (
    <div className='flex justify-center items-center py-10 px-5 flex-col bg-base-200 gap-10'>
      <h1 className='text-2xl font-semibold  '>Achievements</h1>
      <div className='flex sm:flex-row flex-col gap-10'>
      <div className='flex justify-center  items-center  p-5    flex-col bg-white rounded-2xl shadow-md '>
        <div className='py-10  '><img src={Achivement} alt="image" className='w-50 h-40  object-cover' /></div>
        <div className='text-center '>
          Clearing the UPSC exam reflects strong dedication, guided by the library’s supportive environment that nurtured focused study, motivation, and growth.
        </div>
      </div>
        <div className='flex justify-center  items-center  p-5    flex-col bg-white rounded-2xl shadow-md '>
        <div className='py-10  '><img src={Achivement} alt="image" className='w-50 h-40  object-cover' /></div>
        <div className='text-center '>
          Clearing the UPSC exam reflects strong dedication, guided by the library’s supportive environment that nurtured focused study, motivation, and growth.
        </div>
      </div>
        <div className='flex justify-center  items-center  p-5    flex-col bg-white rounded-2xl shadow-md '>
        <div className='py-10  '><img src={Achivement} alt="image" className='w-50 h-40  object-cover' /></div>
        <div className='text-center '>
          Clearing the UPSC exam reflects strong dedication, guided by the library’s supportive environment that nurtured focused study, motivation, and growth.
        </div>
      </div>
      </div>
    </div>
  )
}

export default achivments