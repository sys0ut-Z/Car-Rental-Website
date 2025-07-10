import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const skillsData = [
  {
    name : "Best Price",
    icon : (
      <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-100'/>
    ),
    link : "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem.",
    aosDelay : "0"
  },
  {
    name : "Fast and Safe",
    icon : (
      <GiNotebook className='text-5xl text-primary group-hover:text-black duration-100'/>
    ),
    link : "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem.",
    aosDelay : "0"
  },
  {
    name : "Experienced Drivers",
    icon : (
      <SlNote className='text-5xl text-primary group-hover:text-black duration-100'/>
    ),
    link : "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem.",
    aosDelay : "0"
  },
]

const Services = () => {
  return (
    <div className='py-14 dark:bg-black dark:text-white sm:min-h-[600px]'>
      <div className="container">
        <div className='pb-12'>
          <h1 className='text-3xl xl:text-4xl font-serif font-semibold text-center' >Why Choose Us</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            skillsData.map((skill, i) => (
              <div key={i}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className='card text-center space-y-3 sm:space-y-6 group hover:bg-primary dark:hover:bg-primary
                hover:text-dark p-4 pt-10 transition-ll duration-300 rounded-md bg-gray-300 dark:bg-dark 
                dark:text-white dark:hover:text-black min-h-[350px]'
              >
                {/* place-items-center will NOT work with flex*/}
                <div className='grid place-items-center'>{skill.icon}</div>
                <h1 className='text-lg font-bold'>{skill.name}</h1>
                <p className='px-4 text-pretty text-lg'>{skill.description}</p>
                <a href={skill.link} className='block text-primary group-hover:text-black text-lg xl:text-xl
                  font-bold'>Learn More</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services