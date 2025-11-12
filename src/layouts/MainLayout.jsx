import React from 'react';
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='relative min-h-screen'>

            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Link to="/botPage">
                <button className="fixed bottom-6 right-6 z-50 bg-[#2D5016] hover:bg-[#3A6120] text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default MainLayout;