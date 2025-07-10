import React from 'react'

const Contact = () => {
  return (
    <div className='dark:bg-black dark:text-white py-10'>
      <div className="container cursor-default">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 px-4 py-8 sm:px-6 sm:py-10 rounded-md">
          <div className='space-y-4 col-span-1 md:col-span-2'>
            <h1 data-aos="zoom-in"
              className='text-3xl xl:text-5xl text-pretty font-bold'>Let's collaborate on your upcoming car rental venture</h1>
            <p data-aos="zoom-in" 
              className='text-md xl:text-lg dark:text-gray-400 text-pretty'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, fuga!</p>
          </div>
          <div className='col-span-1'>
            <button data-aos="fade-up"
              data-aos-delay="500"
              className='outline outline-2 outline-primary px-6 py-2 text-2xl xl:text-3xl rounded-md text-primary
            hover:text-primary/60 hover:outline-primary/60 tracking-wider uppercase'>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact