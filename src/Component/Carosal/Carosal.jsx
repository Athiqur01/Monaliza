import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../../assets/banner1.jpg'
import img2 from '../../assets/banner2.png'
import img3 from '../../assets/banner3.jpg'
// import required modules
import { Navigation } from 'swiper/modules';



const Carosal = () => {
    return (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper min-h-80  ">
            

          <SwiperSlide>
              <div className="bg-cover bg-no-repeat w-full h-[550px] h-[600px] py-40 flex flex-col items-center justify-center space-y-6 rounded-b-lg" style={{ backgroundImage: `url(${img1})` }}>
              <h1 className="text-[#FFB6C1] text-xl lg:text-5xl font-bold text-center  ">Welcome to MonaLiza, Dive into its intrigue <br />and explore timeless artistry.</h1>
                 <div className='flex flex-col md:flex-row lg:flex-row space-x-3 space-y-3 md:space-y-0 w-full justify-center items-center'>
                 
                 <button className='bg-[#90c9ce] text-white text-xl rounded-md md:px-6 py-2'>Explore the collections </button>
                 </div>
              </div>  
            </SwiperSlide>
            
            
            
            <SwiperSlide>
              <div className="bg-cover bg-no-repeat w-full h-[550px] h-[600px] flex flex-col items-center justify-center space-y-6 rounded-b-lg" style={{ backgroundImage: `url(${img2})` }}>
              <h1 className="text-[#FFB6C1] text-xl lg:text-6xl font-bold text-center  ">Artistic portal revealing MonaLiza.</h1>
              <div className='flex flex-col md:flex-row lg:flex-row space-x-3 space-y-3 md:space-y-0 w-full justify-center items-center'>
                 <input type="text" placeholder="Art" className="input input-bordered lg:w-full max-w-xs" />
                 <button className='bg-[#7eb6bb] text-white text-xl rounded-md md:px-6 py-2'>Search </button>
                 </div>
              
              </div> 
               
            </SwiperSlide>

            

            <SwiperSlide>
              <div className="bg-cover bg-no-repeat w-full h-[550px] h-[600px] flex flex-col items-center justify-center space-y-6 rounded-b-lg" style={{ backgroundImage: `url(${img3})` }}>
              <h1 className="text-[#FFB6C1] text-xl lg:text-6xl font-bold text-center  ">Best deal in one place where dreams come true</h1>
                 <div className='flex space-x-3 w-full justify-center'>
                 <input type="text" placeholder="what are you looking for" className="input input-bordered lg:w-full max-w-xs" />
                 <button className='bg-emerald-600 text-white text-xl rounded-md px-6 py-2'>Search </button>
                 </div>
              </div>  
            </SwiperSlide>
            
          </Swiper>
        </>
    );
};

export default Carosal;