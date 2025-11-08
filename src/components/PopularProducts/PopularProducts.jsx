import React from 'react';
import monsteraImg from '../../assets/Group 6.png';
import organicImg from '../../assets/Pexels Photo by Anna Shvets.png';
import PruningImg from '../../assets/Pexels Photo by Pavel Danilyuk.png';
import SnakeImg from '../../assets/Pexels Photo by Fabian Stroobants.png';
import arrow from '../../assets/arrow.png';

import star from '../../assets/Star.png';
import halfStar from '../../assets/halfStar.png';

const PopularProducts = () => {
    const Rating = ({ rating, count }) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;
        return (
            <div className='flex items-center gap-1 mt-3'>
                {[...Array(fullStars)].map((_, i) => (
                    <img key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" src={star} alt="" />
                ))}
                {hasHalf && <img className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" src={halfStar} alt="" />}
                <span className="text-[#2D5016] text-xs sm:text-sm lg:text-xl ml-1">
                    ({count})
                </span>
            </div>
        )
    }

    const products = [
        {
            id: 1,
            image: monsteraImg,
            title: "Monstera Deliciosa",
            category: "Indoor Plant",
            price: "৳ 2000 - 3,400",
            rating: 5,
            count: 24
        },
        {
            id: 2,
            image: organicImg,
            title: "Organic Compost Fertilizer",
            category: "Fertilizer",
            price: "৳ 60 - 440",
            rating: 4.5,
            count: 12
        },
        {
            id: 3,
            image: PruningImg,
            title: "Pruning Shears",
            category: "Equipment",
            price: "৳ 180 - 450",
            rating: 4.5,
            count: 34
        },
        {
            id: 4,
            image: SnakeImg,
            title: "Snake Plant",
            category: "Indoor Plant",
            price: "৳ 150 - 500",
            rating: 4.5,
            count: 35
        }
    ];
    return (
        <div className='relative h-auto sm:h-[500px] lg:h-[750px]  px-4 p-4 sm:px-6 lg:p-6'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-12 lg:mb-4'>
                Popular Products
            </h1>
            <p className='text-[#2D5016] text-center mb-8 sm:mb-6 lg:mb-14'>Discover our most popular gardening essentials</p>
            <div className=' grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
                {
                    products.map((product) => (
                        <div key={product.id}>
                            <div className='group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:bg-white relative cursor-pointer'>
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={product.image}
                                        className="w-full h-[140px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                                        alt={product.title} />


                                </div>
                                <div className="px-4 sm:px-6 py-4 relative">
                                    <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold transition-colors duration-300 truncate">
                                        {product.title}
                                    </h1>
                                    <p className="text-[#A7A7A7] text-sm sm:text-base">{product.category}</p>
                                    <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl lg:text-2xl">
                                        {product.price}
                                    </p>
                                    <Rating rating={product.rating} count={product.count} />
                                    <div className=' h-12 mt-4 mb-8  relative'>
                                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer transition-all duration-600 "> Add to Cart </button>


                                    </div>

                                </div>
                            </div>


                        </div>

                    ))
                }

                <div className="hidden lg:flex items-center justify-center
                            w-12 h-12 rounded-full 
                            absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer">

                    <img src={arrow} className="w-12 h-12" />
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;