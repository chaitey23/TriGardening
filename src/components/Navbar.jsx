import React from 'react';
import logoImg from '../assets/logo 1.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <NavLink to='/'>
                <li className="hover:text-[#CC7722] transition-colors px-4 py-2">Home</li>
            </NavLink>
            <NavLink to='/products'>
                <li className="hover:text-[#CC7722] transition-colors px-4 py-2">Products</li>
            </NavLink>
            <NavLink to='/blogs'>
                <li className="hover:text-[#CC7722] transition-colors px-4 py-2">Blog</li>
            </NavLink>
            <NavLink to='/plant-clinic'>
                <li className="hover:text-[#CC7722] transition-colors px-4 py-2">Plant Clinic</li>
            </NavLink>
        </>
    );

    return (
        <div className="navbar bg-[#2D5016] text-white shadow-lg px-6 lg:px-12 fixed top-0 left-0 w-full z-40 py-3">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden mr-4">
                <div tabIndex={0} role="button" className="btn btn-ghost p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-[#2D5016] rounded-box z-50 mt-3 w-56 p-4 shadow-lg border border-white/10 space-y-2">
                    {links}
                    <li>
                        <button className="bg-[#CC7722] hover:bg-[#b5691d] text-white px-4 py-2 rounded-xl transition-colors w-full text-left">
                            Call Now
                        </button>
                    </li>
                </ul>
            </div>

            {/* Logo Section - Left */}
            <div className="flex-1">
                <div className="flex items-center gap-3">
                    <img className="w-12 h-12 lg:w-14 lg:h-14" src={logoImg} alt="TriGardening Logo" />
                    <a className="text-xl lg:text-2xl font-bold text-white">TriGardening</a>
                </div>
            </div>

            {/* Center Navigation - Desktop */}
            <div className="flex-none hidden lg:flex mx-8 items-center gap-8">
                <ul className="menu menu-horizontal gap-8 text-lg font-medium">
                    {links}
                </ul>
                {/* Call Now Button - Desktop (Plant Clinic-এর পরে) */}
                <button className="bg-[#CC7722] hover:bg-[#b5691d] text-white px-6 py-3 rounded-xl transition-colors shadow-lg font-semibold text-sm lg:text-base whitespace-nowrap">
                    Call Now
                </button>
            </div>

            {/* Right Section */}
            <div className="flex-none flex items-center gap-4 lg:gap-6">
                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 lg:px-5 lg:py-2">
                    <input
                        type="text"
                        placeholder="Search plants, tools..."
                        className="bg-transparent border-none outline-none text-white placeholder-white/70 w-32 lg:w-48 text-sm"
                    />
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 ml-1 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Cart Icon - Now Responsive */}
                <div className="relative cursor-pointer hover:text-[#CC7722] transition-colors p-2">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute -top-0 -right-0 bg-[#CC7722] text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-[10px] lg:text-xs">
                        3
                    </span>
                </div>

                {/* User Profile Icon */}
                <div className="hidden lg:block cursor-pointer hover:text-[#CC7722] transition-colors p-2">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Navbar;