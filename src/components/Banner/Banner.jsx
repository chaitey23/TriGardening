import React from 'react';
import bannerImg from '../../assets/Banner.png'
const Banner = () => {
    return (
        <div className='' >
            <div className='relative'>
                <img className='w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover' src={bannerImg} alt="" />
                <div className='absolute top-1/2 left-0 transform -translate-y-1/2 px-4 sm:px-8 lg:px-24 py-6 sm:py-12 lg:py-24 '>
                    <h1 className='text-white text-xl lg:text-6xl font-bold'>Nurture Your Green Paradise</h1>
                    <p className=' mt-4 text-[18px]  lg:text-2xl text-white'>Your slogan goes here</p>
                    <div className='flex space-x-3 sm:space-x-2 lg:space-x-6 mt-8 '>
                        <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>Shop Now</button>
                        <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>Call Now</button>
                    </div>
                </div>
                <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#CC7722]"></span>
                    <span className="w-3 h-3 rounded-full bg-white/50"></span>
                    <span className="w-3 h-3 rounded-full bg-white/50"></span>
                </div>
            </div>

        </div>
    );
};

export default Banner;