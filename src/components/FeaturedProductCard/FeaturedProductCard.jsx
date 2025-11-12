import React from 'react';
import monsteraImg from '../../assets/Group 6.png';
import organicImg from '../../assets/Pexels Photo by Anna Shvets.png';
import PruningImg from '../../assets/Pexels Photo by Pavel Danilyuk.png';
import SnakeImg from '../../assets/Pexels Photo by Fabian Stroobants.png';
import arrow from '../../assets/arrow.png';

import star from '../../assets/Star.png';
import halfStar from '../../assets/halfStar.png';
import { Link } from 'react-router';

const FeaturedProductCard = () => {
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
        <div className=' bg-[#F5F5DC] relative mb-15 px-4 p-4 sm:px-6 lg:p-8'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-12 lg:mb-20 mt-7'>
                Featured Product
            </h1>


            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto'>
                {
                    products.map((product) => (
                        <div key={product.id}>
                            <div className='group bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:bg-white relative cursor-pointer'>
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={product.image}
                                        className="w-full h-[140px] sm:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                                        alt={product.title} />
                                    <div className="absolute inset-0 bg-white bg-opacity-20 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

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
                                    <div className=' h-12 mt-4 mb-8  relative group'>
                                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer transition-all duration-600 absolute  group-hover:-translate-y-80"> Add to Cart </button>
                                        <Link to={`/products/${product.id}`}>
                                            <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 rounded-xl text-sm sm:text-base cursor-pointer 
                     absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "> View Details </button>
                                        </Link>

                                    </div>
                                    <div className="absolute inset-0 bg-white bg-opacity-20 opacity-0 
group-hover:opacity-50 transition-opacity duration-300 pointer-events-none">
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

export default FeaturedProductCard;
