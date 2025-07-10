import React from 'react'

const testimonials = [
  {
    name: "Dilshad",
    image : "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay : "0"
  },
  {
    name: "Satya",
    image : "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay : "300"
  },
  {
    name: "Sabir",
    image : "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay : "600"
  },
]

const Testimonials = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14'>
      <div className="container">
        {/* Header */}
        <div className='space-y-4 pb-12'>
          <h1 className='text-3xl md:text-4xl font-semibold text-center font-serif'>What our clients say About Us</h1>
          <p data-aos="fade-up" 
            className='text-md xl:text-lg text-center sm:px-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur.</p>
        </div>

        {/* Card Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
          {
            testimonials.map((data, i) => (
              <div key={i} className='space-y-6 sm:space-y-4 bg-gray-300 dark:bg-white/20 p-4 rounded-lg cursor-default'
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <div className='grid place-items-center'>
                  <img src="https://picsum.photos/200" alt="testi_img"
                    className='h-20 w-20 rounded-full'
                  />
                </div>
                <p className='text-2xl xl:text-3xl text-center'>
                  ⭐⭐⭐⭐⭐
                </p>
                <p className='text-center text-md xl:text-lg'>{data.description}</p>
                <h1 className='text-center text-xl xl:text-2xl font-bold'>{data.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials