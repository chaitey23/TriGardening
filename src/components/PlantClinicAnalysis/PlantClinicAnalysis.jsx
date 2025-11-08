import React from 'react';
import plantImg from '../../assets/Rectangle 7.png';
import { IoCamera } from 'react-icons/io5';

const PlantClinicAnalysis = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16'>
                {/* Text Content */}
                <div className='lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-[#2D5016] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6'>
                        Plant Clinic Analysis
                    </h1>
                    <p className='text-gray-600 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed max-w-2xl'>
                        Upload a photo of your plant and get instant AI-powered diagnosis with treatment recommendations from our experts
                    </p>
                    <button className='bg-[#7A9B57]  text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#3a6720] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform flex items-center gap-2'>
                        <IoCamera className='text-xl w-6 h-6' />
                        Diagnose Your Plant
                    </button>
                </div>

                {/* Image */}
                <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                    <img
                        src={plantImg}
                        alt="Plant Clinic"
                        className='w-full max-w-sm sm:max-w-md lg:[500px] h-auto rounded-lg shadow-lg object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default PlantClinicAnalysis;