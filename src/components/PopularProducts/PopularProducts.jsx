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
            <div className="flex items-center gap-1 mt-3">
                {[...Array(fullStars)].map((_, i) => (
                    <img
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                        src={star}
                        alt=""
                    />
                ))}
                {hasHalf && (
                    <img
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                        src={halfStar}
                        alt=""
                    />
                )}
                <span className="text-[#2D5016] text-xs sm:text-sm lg:text-base ml-1">
                    ({count})
                </span>
            </div>
        );
    };

    const products = [
        {
            id: 1,
            image: monsteraImg,
            title: 'Monstera Deliciosa',
            category: 'Indoor Plant',
            price: '৳ 2000 - 3,400',
            rating: 5,
            count: 24,
        },
        {
            id: 2,
            image: organicImg,
            title: 'Organic Compost Fertilizer',
            category: 'Fertilizer',
            price: '৳ 60 - 440',
            rating: 4.5,
            count: 12,
        },
        {
            id: 3,
            image: PruningImg,
            title: 'Pruning Shears',
            category: 'Equipment',
            price: '৳ 180 - 450',
            rating: 4.5,
            count: 34,
        },
        {
            id: 4,
            image: SnakeImg,
            title: 'Snake Plant',
            category: 'Indoor Plant',
            price: '৳ 150 - 500',
            rating: 4.5,
            count: 35,
        },
    ];

    return (
        <div className="relative px-4 py-10 sm:px-8 lg:px-16 lg:py-16 ">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold">
                    Popular Products
                </h1>
                <p className="text-[#2D5016] mt-3 text-sm sm:text-base">
                    Discover our most popular gardening essentials
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={product.image}
                                className="w-full h-[200px] sm:h-[220px] lg:h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
                                alt={product.title}
                            />
                        </div>

                        <div className="px-4 sm:px-6 py-4">
                            <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold truncate">
                                {product.title}
                            </h1>
                            <p className="text-[#A7A7A7] text-xs sm:text-sm">{product.category}</p>

                            <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl">
                                {product.price}
                            </p>

                            <Rating rating={product.rating} count={product.count} />

                            <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-5 rounded-xl text-sm sm:text-base transition-all duration-300 hover:bg-[#3c6a1e]">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrow (only on large screens) */}
            <div className="hidden lg:flex items-center justify-center absolute top-1/2 right-10 -translate-y-1/2">
                <img src={arrow} alt="arrow" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    );
};

export default PopularProducts;
