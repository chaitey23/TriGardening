import React from 'react';
import monsteraImg from '../../assets/Group 6.png'
import organicImg from '../../assets/Pexels Photo by Anna Shvets.png'
import PruningImg from '../../assets/Pexels Photo by Pavel Danilyuk.png'
import SnakeImg from '../../assets/Pexels Photo by Fabian Stroobants.png'
import star from '../../assets/Star.png';
import halfStar from '../../assets/halfStar.png';

const FeaturedProductCard = () => {
    return (
        <div className='bg-[#F5F5DC]  h-auto sm:h-[500px] lg:h-[750px] mb-32 px-4 p-4 sm:px-6 lg:p-8'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-12 lg:mb-20  mt-7'>Featured Product</h1>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                    <img
                        src={monsteraImg}
                        alt=""
                        className="w-full h-[140px] sm:h-[200px]  object-cover"
                    />

                    <div className="px-4 sm:px-6 py-4">

                        <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold">
                            Monstera Deliciosa
                        </h1>

                        <p className="text-[#A7A7A7] text-sm sm:text-base">Indoor Plant</p>

                        <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl lg:text-2xl">
                            ৳ 2000 - 3,400
                        </p>

                        <div className="flex items-center gap-1 mt-3">
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />

                            <span className="text-[#2D5016] text-xs sm:text-sm lg:text-xl ml-1">
                                (24)
                            </span>
                        </div>

                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                    <img
                        src={organicImg}
                        alt=""
                        className="w-full h-[140px] sm:h-[200px]  object-cover"
                    />

                    <div className="px-4 sm:px-6 py-4">

                        <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold">
                            Organic Compost Fertilizer
                        </h1>

                        <p className="text-[#A7A7A7] text-sm sm:text-base">Fertilizer</p>

                        <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl lg:text-2xl">
                            ৳ 60 - 440                        </p>

                        <div className="flex items-center gap-1 mt-3">
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={halfStar} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />

                            <span className="text-[#2D5016] text-xs sm:text-sm lg:text-xl ml-1">
                                (12)
                            </span>
                        </div>

                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                    <img
                        src={PruningImg}
                        alt=""
                        className="w-full h-[140px] sm:h-[200px]  object-cover"
                    />

                    <div className="px-4 sm:px-6 py-4">

                        <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold">
                            Pruning Shears
                        </h1>

                        <p className="text-[#A7A7A7] text-sm sm:text-base">Equipment</p>

                        <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl lg:text-2xl">
                            ৳ 180 - 450
                        </p>

                        <div className="flex items-center gap-1 mt-3">
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={halfStar} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />

                            <span className="text-[#2D5016] text-xs sm:text-sm lg:text-xl ml-1">
                                (34)
                            </span>
                        </div>

                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                    <img
                        src={SnakeImg}
                        alt=""
                        className="w-full h-[140px] sm:h-[200px]  object-cover"
                    />

                    <div className="px-4 sm:px-6 py-4">

                        <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold">
                            Snake Plant                        </h1>

                        <p className="text-[#A7A7A7] text-sm sm:text-base">Indoor Plant</p>

                        <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl lg:text-2xl">
                            <span className='font-bold '>৳</span>150- 500
                        </p>




                        <div className="flex items-center gap-1 mt-3">
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={star} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
                            <img src={halfStar} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />

                            <span className="text-[#2D5016] text-xs sm:text-sm lg:text-xl ml-1">
                                (35)
                            </span>
                        </div>

                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer">
                            Add to Cart
                        </button>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default FeaturedProductCard;