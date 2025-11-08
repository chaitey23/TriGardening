import React from 'react';
import logoImg from '../assets/logo 1.png';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <NavLink to='/'>
                <li><a className="hover:text-[#CC7722] transition-colors">Home</a></li>
            </NavLink>
            <NavLink to='/products'>
                <li><a className="hover:text-[#CC7722] transition-colors">Products</a></li>
            </NavLink>
            <li><a className="hover:text-[#CC7722] transition-colors">Blog</a></li>
            <li><a className="hover:text-[#CC7722] transition-colors">Plant Clinic</a></li>
        </>
    );

    return (
        <div className="navbar bg-[#2D5016] text-white shadow-lg px-4 lg:px-8 fixed top-0 left-0 w-full z-50">
            <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-[#2D5016] rounded-box z-50 mt-3 w-56 p-2 shadow-lg border border-white/10">
                    {links}

                </ul>
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <img className="w-12 h-12 lg:w-16 lg:h-16" src={logoImg} alt="TriGardening Logo" />
                    <a className="text-xl lg:text-2xl font-bold text-white hidden lg:block">TriGardening</a>
                </div>
            </div>

            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 text-lg font-medium">
                    {links}
                </ul>
            </div>
            <button className="bg-[#CC7722] hover:bg-[#b5691d] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl transition-colors shadow-lg">
                Call Now
            </button>
            <div className="flex-1 flex justify-end items-center gap-4">
                <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search plants, tools..."
                        className="bg-transparent border-none outline-none text-white placeholder-white/70 w-40 lg:w-48"
                    />
                    <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="relative cursor-pointer hover:text-[#CC7722] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <span className="absolute -top-2 -right-2 bg-[#CC7722] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        3
                    </span>
                </div>

                {/* User Profile Icon */}
                <div className="hidden lg:block cursor-pointer hover:text-[#CC7722] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>



            </div>


        </div>
    );
};

export default Navbar;