import React from 'react';
import plant from '../../assets/Potted Plant.png'
import medicine from '../../assets/Earth Care.png'
import equipment from '../../assets/Fire Shovel.png'
import fertilizers from '../../assets/Solid Fertilizer.png'

const CategoryCard = () => {
    return (
        <div className='mt-12 mb-20 px-4 sm:px-6 lg:px-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-12 lg:mb-20'>
                Shop by Category
            </h1>

            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto text-center'>
                {/* Plant */}
                <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                    <img className='w-12 h-12 p-2 rounded-full bg-white mx-auto' src={plant} alt="Plant" />
                    <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Plants</h1>
                    <p className='mt-2 text-sm sm:text-base lg:text-lg '>Indoor & Outdoor Plants for every space</p>
                </div>

                {/* Medicine */}
                <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                    <img className='w-12 h-12 p-2 rounded-full bg-white mx-auto' src={medicine} alt="Medicine" />
                    <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Medicine</h1>
                    <p className='mt-2 text-sm sm:text-base lg:text-lg'>Natural Plant Care Solutions</p>
                </div>

                {/* Equipment */}
                <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                    <img className='w-12 h-12 p-2 rounded-full bg-white mx-auto' src={equipment} alt="Equipment" />
                    <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Equipment</h1>
                    <p className='mt-2 text-sm sm:text-base lg:text-lg'>Professional Gardening tools</p>
                </div>

                {/* Fertilizers */}
                <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                    <img className='w-12 h-12 p-2 rounded-full bg-white mx-auto' src={fertilizers} alt="Fertilizers" />
                    <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Fertilizers</h1>
                    <p className='mt-2 text-sm sm:text-base lg:text-lg'>Safe & effective plant protection</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
