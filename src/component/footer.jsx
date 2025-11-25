import React from 'react'
import logo from '../assets/lib-logo.png'
const footer = () => {
  return (
    <footer className="flex justify-between items-center flex-col px-20 py-5 bg-base-200">
  <aside className='flex justify-center items-center gap-5'> 
  <img src={logo} alt=""  className='sm:max-w-20 max-w-20' />
    <p className='sm:text-4xl text-2xl font-bold'>Indiginious Library
      
      
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-center">Contact Us </h6>
    <div className="grid grid-flow-col gap-4">
      <a href="tel:9993718898" className='underline underline-offset-2'>
       9993718898
      </a>
    </div>
  </nav>
</footer>
  )
}

export default footer