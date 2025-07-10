import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='dark:bg-dark bg-gray-100 pt-10'>
      <div className="container cursor-default">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-14 md:gap-20">
          {/* Company details */}
          <div className='space-y-3 col-span-2 md:col-span-1'>
            <h1 className='text-pretty text-xl sm:text-3xl font-serif font-bold sm:text-left dark:text-white'>Car Rental</h1>
            <p className='dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Culpa ut ipsum vero totam.
            </p>
            <div className='flex gap-3 items-center'>
              <FaLocationArrow className='dark:text-white'/>
              <p className='dark:text-gray-400'>Ahmedabad, Gujarat</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaMobile className='dark:text-white'/>
              <p className='dark:text-gray-400'>+91 8673985254</p>
            </div>
            <div className='flex gap-6 dark:text-white'>
              {
                [<FaInstagram />, <FaFacebook />, <FaLinkedin />].map((handle, id) => (
                  <a href="#" key={id} className='text-2xl hover:text-primary hover:scale-110 duration-300'>{handle}</a>
                ))
              }
            </div>
          </div>

          {/* Important Links 
            // * NOTE : if flex doesn't work then apply grid, it will perfectly give 50:50 width to both 
          */}
          <div className='grid grid-cols-2 gap-20 col-span-2'>
            <div className='space-y-3'>
              <h1 className='font-bold text-xl sm:text-3xl dark:text-white'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  ["Home", "About", "Contact", "Blog"].map((ilink, i) => (
                    <li className='text-lg sm:text-xl' key={i}>
                      <span className='mr-2 text-md dark:text-white'>&#11162;</span> {/* arrow list style */}
                      <a href="#" className='hover:text-primary dark:hover:text-primary dark:text-gray-400'>{ilink}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='space-y-3 col-span-1'>
              <h1 className='font-bold text-xl sm:text-3xl dark:text-white'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  ["Home", "About", "Contact", "Blog"].map((ilink, i) => (
                    <li className='text-lg sm:text-xl' key={i}>
                      <span className='mr-2 text-md dark:text-white'>&#11162;</span> {/* arrow list style */}
                      <a href="#" className='hover:text-primary dark:hover:text-primary dark:text-gray-400'>{ilink}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Locations
            Above section/div has col span of 2 so it will look more better in medium(md), you can check
          */}
          <div className='space-y-3 col-span-1'>
            <h1 className='font-bold text-xl sm:text-3xl text-left dark:text-white'>Location</h1>
            <ul className='space-y-3'>
              {
                ["Home", "About", "Contact", "Blog"].map((ilink, i) => (
                  <li className='text-lg sm:text-xl' key={i}>
                    <span className='mr-2 text-md dark:text-white'>&#11162;</span> {/* arrow list style */}
                    <a href="#" className='hover:text-primary dark:hover:text-primary dark:text-gray-400'>{ilink}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer