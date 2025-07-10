import React, { useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResPhoneNavbar from '../ResPhoneNavbar/ResPhoneNavbar'

export const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "About",
    link: "/#about"
  },
  {
    id: 3,
    name: "Cars",
    link: "/#cars"
  },
  {
    id: 4,
    name: "Booking",
    link: "/#booking"
  },
]

const Navbar = ({theme, setTheme}) => {
  // to show/hide responsive Navbar in phone
  const [showMenu, setShowMenu] = useState(false);

  // toggle the Navbar
  const toggleMenu = () => {
    setShowMenu(s => !s)
  }

  return (
    <nav className='shadow-lg dark:bg-dark dark:text-white bg-slate-400/50'>
      <div className='container md:py-0'>
        <div className='flex justify-center sm:justify-between items-center'>
          <div>
            <h1 className='font-serif text-3xl xl:text-4xl font-bold hidden sm:block'>Car Rental</h1>
          </div>
          <div className='flex items-center gap-4 px-6'>
            {/* NOTE : instead of everytime using justify-* we can use gap property to assigin our custom space for both flex & grid */}
            <ul className='flex items-center gap-5 sm:gap-8 uppercase'>
              {
                navLinks.map(({id, name, link}) => (
                  <li key={id} className='py-4'>
                    <a 
                      href={link} 
                      className='inline-block py-4 hover:text-primary
                      transition-colors duration-300 text-lg font-medium'
                    >
                      {name}
                    </a>
                  </li>
                ))
              }
            </ul>
            <div>
              {
                theme === "dark" ? (
                  <BiSolidSun className='text-2xl cursor-pointer' 
                    onClick={() => setTheme("light")}/>
                ) : (
                  <BiSolidMoon className='text-2xl cursor-pointer'
                    onClick={() => setTheme("dark")}/>
                )
              }
            </div>

            {/* real name of the icon-> Hamburger phone menu */}
            {/* only show the Navbar in phone view */}
            <div className='inline-block sm:hidden'>
              {/* Menu Icon(three dashed bars) */}
              {
                showMenu ? (
                  <HiMenuAlt1 
                    onClick={toggleMenu}
                    size={30}
                    className='cursor-pointer'
                  />
                ) : (
                  <HiMenuAlt3 
                    onClick={toggleMenu}
                    size={30}
                    className='cursor-pointer'
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
      <ResPhoneNavbar showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Navbar