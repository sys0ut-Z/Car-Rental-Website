import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { navLinks } from '../Navbar/Navbar'

const ResPhoneNavbar = ({showMenu, toggleMenu}) => {
  return (
    <div className={`fixed sm:hidden top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] rounded-r-xl shadow-md
      ${showMenu ? "left-0" : "-left-full"} transition-all duration-300 px-8 pb-6 pt-16 flex flex-col justify-between 
    `}>
      <div className="card">
        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1>Premium User</h1>
          </div>
        </div>

        {/* Links(Navigation section so use <nav> tag) */}
        <nav className='mt-12'>
          <ul className='space-y-4 text-xl uppercase'>
            {
              navLinks.map((nlink) => (
                <li key={nlink.id}>
                  <a href={nlink.link} className='hover:text-primary'>{nlink.name}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      {/* Navbar Footer */}
      <div>
        <h1 className='text-lg'>Made by Dilshad, The Coding Journey</h1>
      </div>
    </div>
  )
}

export default ResPhoneNavbar