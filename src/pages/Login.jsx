import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen pt-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Login to your Account
                        </h2>
                        <p className="text-gray-600 text-lg">
                            To Write Review
                        </p>
                    </div>

                    {/* Social Login Buttons - Side by Side */}
                    <div className="flex gap-4 mb-6">
                        {/* Google Login Button */}
                        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                            <FaGoogle className="text-red-500" />
                            <span className="text-sm">Google</span>
                        </button>

                        {/* Facebook Login Button */}
                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#166FE5] transition-colors duration-200">
                            <FaFacebook className="text-white" />
                            <span className="text-sm">Facebook</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-6">
                        {/* Phone Number Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                            />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#2D5016] focus:ring-[#2D5016] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember Me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#2D5016] hover:text-[#2D5016]/80 transition-colors">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#2D5016]/90 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:ring-offset-2 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to='/register' className="font-medium text-[#2D5016] hover:text-[#2D5016]/80 transition-colors">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center text-gray-500 text-sm">
                    <p>By logging in, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Login;