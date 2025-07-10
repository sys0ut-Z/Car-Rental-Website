import React from 'react'
import patternImg from '../../assets/website/pattern.jpeg'
import appstoreImg from '../../assets/website/app_store.png'
import playstoreImg from '../../assets/website/play_store.png'

const bannerImg = {
  backgroundImage : `url(${patternImg})`,
  backgroundRepeat : 'no-repeat',
  backgroundSize : "cover",
  backgroundPosition: "center",
  height: '100%',
  width: '100%',
}
const AppStore = () => {
  return (
    // * even if you keep the outmost div as container still it will work perfectly, but we've to give bg color
    <div className='dark:bg-black dark:text-white pb-10'>
      <div className='container'>
        <div className='text-black py-10 sm:min-h-[400px] grid place-items-center rounded-xl'
          style={bannerImg}
        >
          {/*
            if you try to center below h1 & p inside div using flex & grid , it won't work
            coz h1 & p are block elements so they will take full width regardless of their content, 

            so to center their content, we must use text-center individually
          */}
          <div className='cursor-default'>
            <div className='space-y-6 max-w-xl xl:max-w-2xl'>
              <h1 data-aos="fade-up" 
                className='font-serif font-bold text-2xl xl:text-4xl text-center'>Get Started With our App</h1>
              <p data-aos="fade-up" 
                className='text-lg xl:text-xl text-center text-pretty px-6 font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate saepe fuga delectus quam praesentium.</p>

              {
                /* 
                  to adjust the responsiveness of the images, we will give max width to its highest parent div
                  images will automatically be adjusted on every breakpoint
                */
              }
              <div className='p-4 flex justify-center items-center gap-2'>
                <a href="#">
                  <img src={playstoreImg} alt="playstore_img" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800"
                    className='max-w-[160px] sm:max-w-[180px] md:max-w-[260px]'
                  />
                </a>
                <a href="#">
                  <img src={appstoreImg} alt="appstore_img" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800"
                    className='max-w-[160px] sm:max-w-[180px] md:max-w-[260px]'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore