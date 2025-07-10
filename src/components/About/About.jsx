import React from 'react'
import carPng from '../../assets/car1.png'

const About = () => {
  return (
    <div className='dark:bg-dark dark:text-white bg-slate-200 duration-300 sm:min-h-[600px]
    sm:grid sm:place-items-center cursor-default'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">

          {/* Car Image Section */}
          <div data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-once="false"      
          >
            <img src={carPng} alt=""
              className='car-drop-shadow'
            />
          </div>

          {/* Text Content Section */}
          <div>
            {/* NOTICED HERE ? : we have to give the padding to the child so we've put the main div */}
            <div className='space-y-5 sm:p-16 pb-6 dark:text-gray-300'>
              <h1 className='text-3xl sm:text-4xl font-bold font-serif dark:text-white'
                data-aos="fade-up"
              >About Us</h1>
              <p className='lg:text-xl font-semibold'
                data-aos="fade-up"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Laboriosam commodi doloribus accusamus odio et provident.</p>
              <p className='lg:text-xl font-semibold'
                data-aos="fade-up"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, enim.</p>
              {/* for an outline to be visible, you must give the style to outline */}
              <button className='text-primary outline outline-2 px-6 py-2 rounded-md tracking-wider hover:text-primary/60'
                data-aos="fade-up"  
              >
                  Get Started
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About