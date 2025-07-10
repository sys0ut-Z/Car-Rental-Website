import React from 'react'
import carPngDark from '../../assets/car.png'
import carPngLight from '../../assets/banner-car.png'

const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white bg-slate-100 duration-300 cursor-default'>
      <div className='container min-h-[600px]'>
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>

          {/* Image Section */}
          <div className='order-1 sm:order-2 p-2 overflow-hidden'
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img src={theme === "light" ? carPngLight : carPngDark} alt=""
              className='max-h-[395px] sm:scale-125 car-drop-shadow'
            />
          </div>

          {/* Text Section */}
          <div className='order-2 sm:order-1 space-y-5 p-4'>
            <p className='text-primary text-2xl font-serif'
              data-aos="fade-up"
              data-aos-delay="800"
            >Effortless</p>
            <h1 className='font-serif font-semibold text-5xl lg:text-7xl'
              data-aos="fade-up"
              data-aos-delay="800"
            >Welcome to our Services</h1>
            <p className='text-pretty sm:pr-20 lg:text-xl font-semibold'
              data-aos="fade-up"
              data-aos-delay="1000"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis eius quis minus, voluptate quia debitis est porro numquam vero sed?</p>
            <button className='bg-primary text-white px-6 py-2 rounded-md 
            hover:bg-primary/80 duration-300 cursor-pointer text-[16px]'
              data-aos="fade-up"
              data-aos-duration="1300"
            >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero