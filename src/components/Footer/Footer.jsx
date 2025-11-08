import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#2D5016] text-white">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

                    <div className="flex flex-col justify-start items-start">
                        <div className="flex items-center mb-3">
                            <div className="mr-3">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-[#2D5016] font-bold text-sm">TG</span>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">TriGardening</h2>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">Your Slogan goes here</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Shippings</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Referral Program</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Categories</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Plants</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Tools</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Fertilizers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pesticides</a></li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300">support@trigardening.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300">Call Now</span>
                            </div>
                            <div className="flex items-center space-x-3 ml-7">
                                <span className="text-gray-300">+8801234567890</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-gray-300 text-sm">
                            © 2025 TriGardening. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;