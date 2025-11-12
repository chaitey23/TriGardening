import React, { useState } from 'react';
import { FaFilter, FaChevronRight } from 'react-icons/fa';
import monsteraImg from '../../src/assets/Group 6.png';
import organicImg from '../../src/assets/Pexels Photo by Anna Shvets.png';
import PruningImg from '../../src/assets/Pexels Photo by Pavel Danilyuk.png';
import SnakeImg from '../../src/assets/Pexels Photo by Fabian Stroobants.png';
import star from '../../src/assets/Star.png';
import halfStar from '../../src/assets/halfStar.png';
import seedsImg from '../assets/seed.png';
import medicineImg from '../assets/medicine.png';
import equipmentImg from '../assets/Equipment.png';
import goldenPlant from '../assets/goldenPlant.png'
import { Link } from 'react-router';
const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");


    const products = [
        {
            id: 1,
            image: monsteraImg,
            title: "Monstera Deliciosa",
            category: "Plant",
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
            category: "Plant",
            price: "৳ 150 - 500",
            rating: 4.5,
            count: 35
        },
        {
            id: 5,
            image: seedsImg,
            title: "Tomato Seed",
            category: "Seed",
            price: "৳ 60 - 300",
            rating: 5,
            count: 12
        },
        {
            id: 6,
            image: medicineImg,
            title: "Rooting Hormone",
            category: "Medicine",
            price: "৳ 200 -400",
            rating: 5,
            count: 12
        },
        {
            id: 7,
            image: equipmentImg,
            title: "Plant Tob",
            category: "Equipment",
            price: "৳ 2000 - 3,400",
            rating: 5,
            count: 24
        },
        {
            id: 8,
            image: goldenPlant,
            title: "Golden Pothos",
            category: "Plant",
            price: "৳ 300 - 350",
            rating: 5,
            count: 12
        },
    ];
    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category.toLowerCase() === (selectedCategory.toLowerCase()));
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
        );
    };

    return (
        <div className="min-h-screen bg-[#F3F3F3] pt-24">
            {/* Top Navigation */}
            <div className='bg-white'>
                <nav className="">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex py-4">
                            <div className="flex space-x-8 text-[15px] text-gray-700 overflow-x-auto">
                                {['All', 'Plant', 'Tool', 'Fertilizer', 'Seed', 'Medicine', 'Equipment'].map((item) => (
                                    <button onClick={() => setSelectedCategory(item)}
                                        key={item}
                                        href="#"
                                        className={`hover:text-[#2D5016] transition-colors whitespace-nowrap ${selectedCategory === item ? 'text-[#2D5016] font-medium underline' : ''}`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 py-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
                            <span className="hover:text-[#2D5016] cursor-pointer whitespace-nowrap">Home</span>
                            <FaChevronRight className="w-3 h-3 " />
                            <span className="hover:text-[#2D5016] cursor-pointer whitespace-nowrap">Products</span>
                            <FaChevronRight className="w-3 h-3 " />
                            <span className="hover:text-[#2D5016] cursor-pointer whitespace-nowrap">
                                {selectedCategory}
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">

                    <div className="w-64 hidden lg:block">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter Products</h3>
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Indoor Plants (02)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Outdoor Plants (03)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                                <div className="space-y-3">
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="0"
                                            max="10000"
                                            step="100"
                                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>$0</span>
                                        <span>$10,000+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Small (50)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Medium (20)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Large (50)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h4 className="font-medium text-gray-900 mb-3">Light Requirements</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Low Light (10)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Medium Light (10)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-3 w-4 h-4 text-[#2D5016] border-gray-300 rounded" />
                                        <span className="text-sm text-gray-700">Bright Light (10)</span>
                                    </label>
                                </div>
                            </div>

                            <button className="w-full bg-[#7A9B57] text-white py-2.5 rounded-lg transition-colors font-medium text-sm">
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <div className="text-gray-700">
                                <span className="font-semibold">{selectedCategory === 'All' ? 'Plants' : selectedCategory}</span>
                                <span className="mx-2">•</span>
                                <span className="text-sm">
                                    Showing {filteredProducts.length} of {products.filter(p => selectedCategory === 'All' ? true : p.category === selectedCategory).length} products
                                </span>

                            </div>


                            <div className="flex items-center space-x-2 w-full sm:w-auto">
                                <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                                <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent w-full sm:w-auto">
                                    <option>Popular</option>
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Rating</option>
                                </select>
                            </div>

                        </div>

                        <div className='mt-8'>
                            {
                                filteredProducts.length === 0 ? (
                                    <p className="text-center text-gray-500 text-lg font-medium py-10 animate-pulse">
                                        No products found in this category 🌱
                                    </p>
                                ) : (
                                    <>
                                        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto'>
                                            {
                                                filteredProducts.map((product) => (
                                                    <div key={product.id}>
                                                        <Link to={`/products/${product.id}`}>
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
                                                                    <div className=' h-12 mt-4 mb-8'>
                                                                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-4 rounded-xl text-sm sm:text-base mb-2 cursor-pointer transition-all "> Add to Cart </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                        <div className="text-center mt-12">
                                            <button className="bg-[#7A9B57] text-white px-14 py-3.5 rounded-lg hover:bg-[#3a6720] transition-colors font-medium text-[15px] mt-5 mb-12">
                                                Load More Products
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
