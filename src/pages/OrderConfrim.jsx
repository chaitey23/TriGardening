import React from 'react';
import { Link } from 'react-router';

const OrderConfirmationPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 pt-24">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Thank you for purchasing from TriGardening
                    </h1>

                    {/* Order Confirmed Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8 border-l-4 border-green-500">
                        <h2 className="text-2xl font-bold text-green-600 mb-3">Order Confirmed</h2>
                        <p className="text-gray-600 mb-4">
                            Your order has been placed successfully.
                        </p>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Delivery Method:</span>
                                <span className="text-gray-800">Cash on Delivery</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Estimated Date:</span>
                                <span className="text-gray-800">25 - 30 Sep 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Order Details */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
                            Order #10012
                        </h3>

                        <div className="space-y-3">
                            {[
                                { label: "Order size", value: "1.00" },
                                { label: "Price", value: "0.00" },
                                { label: "Year of Year", value: "" },
                                { label: "Total", value: "" },
                                { label: "Proportion of Total", value: "" },
                                { label: "Value", value: "" },
                                { label: "Amounts", value: "$1,000", highlight: true }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className={`text-gray-600 ${item.highlight ? 'font-semibold' : ''}`}>
                                        {item.label}
                                    </span>
                                    <span className={`font-medium ${item.highlight ? 'text-green-600 text-lg' : 'text-gray-800'}`}>
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Customer Information */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
                            Your Information
                        </h3>

                        <div className="space-y-6">
                            {/* Name and Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full name
                                    </label>
                                    <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50">
                                        <p className="text-gray-800">Mohammed Nomen</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50">
                                        <p className="text-gray-800">+883 172 - 346678</p>
                                    </div>
                                </div>
                            </div>

                            {/* Delivery Address */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Delivery Address
                                </label>
                                <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 min-h-[80px]">
                                    <p className="text-gray-800">
                                        Hokai Ali, Seoul B, Charmouck, Dhaka-7095
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Return Button */}
                <div className="text-center mb-12">
                    <div className="border-t border-gray-300 my-6"></div>
                    <Link

                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                        Return to My Orders List
                    </Link>
                    <div className="border-t border-gray-300 my-6"></div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-12">
                    <div className="flex items-center justify-center space-x-4">
                        {['Shopping Cart', 'Review & Checkout', 'Order Confirmed'].map((step, index) => (
                            <React.Fragment key={step}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${index === 2 ? 'bg-green-500' : 'bg-gray-300'
                                        }`}>
                                        <span className={`font-semibold ${index === 2 ? 'text-white' : 'text-gray-600'
                                            }`}>
                                            {index + 1}
                                        </span>
                                    </div>
                                    <span className={`text-sm font-medium ${index === 2 ? 'text-green-500' : 'text-gray-500'
                                        }`}>
                                        {step}
                                    </span>
                                </div>
                                {index < 2 && (
                                    <div className="flex-1 h-1 bg-gray-300 max-w-16"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;