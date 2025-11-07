import React from 'react';
import bannerImg from '../../assets/Banner.png'
const Banner = () => {
    return (
        <div className='mb-32 ' >
            <div className='relative'>
                <img className='w-full h-full object-cover' src={bannerImg} alt="" />
                <div className='absolute top-1/2 left-0 transform -translate-y-1/2 p-24 '>
                    <h1 className='text-white text-4xl font-bold'>Nurture Your Green Paradise</h1>
                    <p className=' mt-4 text-xl text-white s'>Your slogan goes here</p>
                    <div className='space-x-6 mt-4'>
                        <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full transition-colors shadow-lg'>Shop Now</button>
                        <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full transition-colors shadow-lg'>Call Now</button>
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