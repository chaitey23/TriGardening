import React from 'react';
import { useParams, Link, NavLink } from 'react-router';
import { FaChevronRight } from 'react-icons/fa';

import monsteraImg from '../assets/Group 6.png';
import organicImg from '../assets/Pexels Photo by Anna Shvets.png';
import PruningImg from '../assets/Pexels Photo by Pavel Danilyuk.png';
import SnakeImg from '../assets/Pexels Photo by Fabian Stroobants.png';
import star from '../assets/Star.png';
import halfStar from '../assets/halfStar.png';

const ProductDetailsPage = () => {
    const { id } = useParams();

    const products = [
        {
            id: 1,
            image: monsteraImg,
            title: "Monstera Deliciosa",
            category: "Indoor Plant",
            price: "৳ 2000 - 3,400",
            rating: 5,
            count: 24,
            description: "Monstera Deliciosa is a popular indoor plant known for its large, glossy leaves. Perfect for bright indoor spaces."
        },
        {
            id: 2,
            image: organicImg,
            title: "Organic Compost Fertilizer",
            category: "Fertilizer",
            price: "৳ 60 - 440",
            rating: 4.5,
            count: 12,
            description: "Organic compost fertilizer enriches the soil naturally and improves plant growth."
        },
        {
            id: 3,
            image: PruningImg,
            title: "Pruning Shears",
            category: "Equipment",
            price: "৳ 180 - 450",
            rating: 4.5,
            count: 34,
            description: "High-quality pruning shears for precise trimming of plants and shrubs."
        },
        {
            id: 4,
            image: SnakeImg,
            title: "Snake Plant",
            category: "Indoor Plant",
            price: "৳ 150 - 500",
            rating: 4.5,
            count: 35,
            description: "Snake Plants are easy to care for and great for purifying indoor air."
        },

    ];

    const product = products.find(p => p.id === parseInt(id));

    const Rating = ({ rating, count }) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;

        return (
            <div className='flex items-center gap-2 mt-2'>
                {[...Array(fullStars)].map((_, i) => (
                    <img key={i} src={star} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                ))}
                {hasHalf && <img src={halfStar} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />}
                <span className="text-[#2D5016] text-sm sm:text-base ml-1">({count} reviews)</span>
            </div>
        )
    };

    if (!product) {
        return (
            <div className="min-h-screen pt-24 flex justify-center items-center">
                <h1 className="text-xl text-gray-500">Product not found!</h1>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-[#F3F3F3]">

            <div className="bg-white">
                <nav>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex py-4">
                            <div className="flex space-x-8 text-[15px] text-gray-700 overflow-x-auto">

                                {[
                                    { name: "Plants", match: "Plant" },
                                    { name: "Seeds", match: "Seed" },
                                    { name: "Medicine", match: "Medicine" },
                                    { name: "Fertilizers", match: "Fertilizer" },
                                    { name: "Equipments", match: "Equipment" },
                                ].map((item) => (
                                    <span
                                        key={item.name}
                                        className={
                                            product.category.includes(item.match)
                                                ? "text-[#2D5016] font-medium underline"
                                                : "text-gray-700 hover:text-[#2D5016]"
                                        }
                                    >
                                        {item.name}
                                    </span>
                                ))}


                            </div>
                        </div>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
                        <Link to="/" className="hover:text-[#2D5016]">Home</Link>
                        <FaChevronRight className="w-3 h-3" />

                        <Link to="/products" className="hover:text-[#2D5016]">Products</Link>
                        <FaChevronRight className="w-3 h-3" />

                        <span className="text-[#2D5016] font-medium">{product.category}</span>
                        <FaChevronRight className="w-3 h-3" />

                        <span className="text-[#2D5016] font-semibold">{product.title}</span>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row gap-10">

                <div className="lg:w-1/2">
                    <img src={product.image} alt={product.title} className="w-full rounded-xl object-cover" />
                </div>

                <div className="lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl text-[#2D5016] font-bold mb-4">{product.title}</h1>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">{product.category}</p>

                    <p className="text-[#CC7722] text-2xl font-bold">{product.price}</p>

                    <Rating rating={product.rating} count={product.count} />

                    <p className="mt-4 text-gray-700 text-sm sm:text-base">{product.description}</p>

                    <div className="mt-6 flex items-center gap-4">
                        <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            className="w-20 border border-gray-300 rounded-lg px-2 py-1"
                        />
                        <button className="bg-[#2D5016] text-white px-6 py-2 rounded-lg hover:bg-[#3a6720]">
                            Add to Cart
                        </button>
                    </div>

                    <Link to="/products" className="mt-6 inline-block text-[#2D5016] hover:underline">
                        ← Back to Products
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;
