import React from 'react'
import car1 from '../../assets/white-car.png'
import car2 from '../../assets/car5.png'
import car3 from '../../assets/car6.png'

const carList = [
  {
    name: "BMW UX",
    price : 100,
    image: car1,
    aosDelay : "0",
  },
  {
    name: "KIA UX",
    price : 140,
    image: car2,
    aosDelay : "400",
  },
  {
    name: "Scorpio",
    price : 100,
    image: car3,
    aosDelay : "800",
  },
]
const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-slate-100 dark:bg-dark dark:text-white'>
      <div className="container">
        <h1 data-aos="fade-up" 
          className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>List of Cars</h1>
        <p data-aos="fade-up" 
          className='text-md pb-10 xl:text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, laborum?</p>      

        {/* Car Cards */}
        <div className='p-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
            {
              carList.map((car, i) => (
                <div className='relative group border-2 border-gray-300 hover:border-primary rounded-md p-3
                  flex flex-col justify-between'
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={car.aosDelay}
                  >
                  <div className=''>
                    <img src={car.image} alt="car_image" className='sm:translate-x-6 group-hover:sm:max-md:translate-x-10 group-hover:md:translate-x-16 duration-500'/>
                  </div>
                  <div className='px-3 py-2'>
                    <h1 data-aos="fade-up"
                      className='text-primary text-xl xl:text-2xl font-semibold'>{car.name}</h1>
                    <div className='text-lg xl:text-xl flex justify-between gap-4'>
                      <p className=''>${car.price}/Day</p>
                      <a href="#" className='text-primary font-medium'>DETAILS</a>
                    </div>
                  </div>
                  <p className='text-md xl:text-xl absolute top-4 left-4 font-bold'>
                    12Km
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='pt-6 flex justify-center'>
          <button className='text-primary outline outline-2 px-6 py-2 rounded-md tracking-wider hover:text-primary/60'
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarList