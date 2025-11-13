import React from 'react';
import leafPlant from '../assets/Pexels Photo by Fabian Stroobants.png';
import monstera from '../assets/Group 6.png';
import vermi from '../assets/medicine.png';
import { Link } from 'react-router';

const CartPage = () => {
    return (
        <div className="min-h-screen bg-[#F8F8F8] py-10 px-4 pt-24">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#2D5016]">Your Shopping Cart</h1>
                    <Link to="/products" className="flex items-center text-[#4B6F36] font-medium mb-2 hover:underline">
                        <span className="mr-2 text-lg">←</span> Back to product page
                    </Link>
                    <p className="text-gray-500 mt-1 text-sm md:text-base">3 items</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Cart Items */}
                    <div className="flex-1">
                        {[
                            { id: 1, img: leafPlant, name: 'Fiddle Leaf Plant', pot: '6" Pot', price: 300 },
                            { id: 2, img: monstera, name: 'Monstera Delisiosa', pot: '6" Pot', price: 300 },
                            { id: 3, img: vermi, name: 'Vermi Compost', pot: '6" Pot', price: 300 },
                        ].map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                {/* Image */}
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="w-20 h-20 bg-[#EEF3E7] rounded-lg flex items-center justify-center overflow-hidden">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-[#2D5016]">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{item.pot}</p>
                                        <p className="text-[#CC7722] font-semibold mt-1 text-sm">৳ 150</p>
                                    </div>
                                </div>

                                {/* Quantity & Price */}
                                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
                                        <span className="px-4 py-1 text-gray-800 font-medium">1</span>
                                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                    </div>
                                    <span className="text-[#CC7722] font-bold text-base md:text-lg">৳ {item.price}</span>
                                    <button className="text-[#CC7722] hover:text-red-500 text-lg font-bold">×</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl md:text-2xl font-bold text-[#2D5016] mb-4">Order Summary</h2>

                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="text-gray-600">Sub Total</span>
                                <span className="text-gray-800 font-medium">৳ 900</span>
                            </div>

                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="text-gray-600">Delivery Charge</span>
                                <span className="text-gray-800 font-medium">৳ 100</span>
                            </div>

                            <div className="py-4 border-b border-gray-200">
                                <p className="text-gray-600 mb-2">Coupon Code</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D5016] text-sm"
                                    />
                                    <button className="px-4 py-2 bg-[#2D5016] text-white rounded-lg hover:bg-[#3d7120] text-sm font-medium">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-4">
                                <span className="text-lg font-semibold text-gray-800">Total</span>
                                <span className="text-[#CC7722] text-xl font-bold">৳ 1000</span>
                            </div>

                            <Link to='/checkout'>
                                <button className="w-full bg-[#2D5016] hover:bg-[#3c6d23] text-white py-3 rounded-lg font-semibold mt-2 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
