import React, { useState } from 'react';
import leaf from '../assets/Group 77.png';
import sideBar from '../assets/sideBar.png';
import newChat from '../assets/newChat.png';
import search from '../assets/search.png';
import gallery from '../assets/gallery.png';
import profile from '../assets/profile.png';
import chatImg from '../assets/msgImg.jpg';
import camera from '../assets/camera.png';
import micIcon from '../assets/mic.png';
import sendIcon from '../assets/send.png';
import attachmentImg from '../assets/attachment.png';

const AIChatbotPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#F7F8F3] pt-16 lg:pt-20">
            {/* Mobile Header - Fixed below main navbar */}
            <div className="fixed top-16 left-0 right-0 flex items-center justify-between bg-[#7A9B57] z-40 text-white px-6 py-3 lg:hidden">
                <img className="w-8 h-8" src={leaf} alt="logo" />
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <img className="w-6 h-6" src={sideBar} alt="menu" />
                </button>
            </div>

            {/* Sidebar - Fixed on mobile, static on desktop */}
            <aside
                className={`fixed lg:static top-0 left-0 h-full lg:h-auto bg-[#7A9B57] text-white flex flex-col p-6 w-64 lg:w-72 z-30 lg:z-auto transform 
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    transition-transform duration-300 ease-in-out mt-0 lg:mt-0`}
                style={{ top: '64px' }} // Main navbar height (4rem = 64px)
            >
                {/* Desktop Header */}
                <div className="hidden lg:flex items-center justify-between mb-8">
                    <img className="w-10 h-10" src={leaf} alt="logo" />
                    <img className="w-8 h-8" src={sideBar} alt="menu" />
                </div>

                {/* MENU SECTION */}
                <div className="space-y-5">
                    <div className="flex gap-4 items-center cursor-pointer">
                        <img className="w-8 h-8" src={newChat} alt="" />
                        <p className="text-lg font-medium">New Chat</p>
                    </div>

                    <div className="flex gap-4 items-center cursor-pointer">
                        <img className="w-8 h-8" src={search} alt="" />
                        <p className="text-lg font-medium">Search Chat</p>
                    </div>

                    <div className="flex gap-4 items-center cursor-pointer">
                        <img className="w-8 h-8" src={gallery} alt="" />
                        <p className="text-lg font-medium">Uploaded Media</p>
                    </div>
                </div>

                {/* HISTORY */}
                <h4 className="text-xl mt-8 mb-4 font-semibold">History</h4>

                <ul className="space-y-3 text-base font-medium">
                    <li className="cursor-pointer hover:bg-[#F5F5DC] hover:text-[#2D5016] p-4 rounded-2xl transition">
                        How to fix yellow leaves
                    </li>
                    <li className="cursor-pointer hover:bg-[#F5F5DC] hover:text-[#2D5016] p-4 rounded-2xl transition">
                        Mango plant leaf issue
                    </li>
                    <li className="cursor-pointer hover:bg-[#F5F5DC] hover:text-[#2D5016] p-4 rounded-2xl transition">
                        গোলাপ গাছে পোকা হলে....
                    </li>
                    <li className="cursor-pointer hover:bg-[#F5F5DC] hover:text-[#2D5016] p-4 rounded-2xl transition">
                        সবচেয়ে ভালো জৈব সার
                    </li>
                    <li className="cursor-pointer hover:bg-[#F5F5DC] hover:text-[#2D5016] p-4 rounded-2xl transition">
                        টমেটো গাছের পাতা হলুদ
                    </li>
                </ul>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed  lg:hidden z-20"
                    style={{ top: '64px' }} // Below main navbar
                ></div>
            )}

            {/* Main Content */}
            <main className="flex flex-col flex-1 bg-[#F3F3F3] min-h-screen mt-16 lg:mt-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8 mt-0">
                    {/* BOT MESSAGE 1 */}
                    <div className="flex items-start gap-3">
                        <img
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-[#2D5016]"
                            src={leaf}
                            alt=""
                        />
                        <p className="bg-[#F5F5DC] text-[#2D5016] p-3 sm:p-4 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-2xl text-[14px] sm:text-[15px] shadow">
                            ট্রাইগার্ডেনিং এর, প্ল্যান্ট ক্লিনিকে আপনাকে স্বাগতম। আমি আপনার প্লান্ট ডক্টর।
                            আপনার গাছের কোন সমস্যা নিয়ে আজ কথা বলতে চান? আক্রান্ত পাতার ছবি শেয়ার করুন
                            অথবা আপনার প্রশ্ন লিখুন।
                        </p>
                    </div>

                    {/* USER MESSAGE */}
                    <div className="flex justify-end">
                        <div className="flex items-start gap-3">
                            <p className="bg-[#2D5016] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] sm:max-w-md text-[14px] sm:text-[15px] shadow">
                                আমার গাছের পাতায় দাগ পড়ছে, এর কারণ কি বলতে পারেন?
                            </p>
                            <img
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-white"
                                src={profile}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* BOT MESSAGE */}
                    <div className="flex items-start gap-3">
                        <img
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-[#2D5016]"
                            src={leaf}
                            alt=""
                        />
                        <p className="bg-[#F5F5DC] text-[#2D5016] p-3 sm:p-4 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-2xl text-[14px] sm:text-[15px] shadow">
                            আপনার দেয়া লক্ষণ দেখে মনে হচ্ছে পাতায় ছত্রাকজনিত দাগ হতে পারে।
                            এটা অনেক সময় অতিরিক্ত আর্দ্র বা ভেজা পরিবেশে দেখা যায়।
                        </p>
                    </div>

                    <div className="flex justify-end gap-3">
                        <img
                            src={chatImg}
                            alt="placeholder"
                            className="rounded-xl shadow-lg w-[250px] sm:w-[400px] lg:w-[500px] object-cover"
                        />
                        <img
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-white"
                            src={profile}
                            alt=""
                        />
                    </div>

                    <div className="flex items-start gap-3">
                        <img
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-[#2D5016]"
                            src={leaf}
                            alt=""
                        />
                        <p className="bg-[#F5F5DC] text-[#2D5016] p-3 sm:p-4 rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-2xl text-[14px] sm:text-[15px] shadow">
                            ছবিটি বিশ্লেষণ করে বেশ কিছু সম্ভাব্য সমস্যা পাওয়া গেছে। আপনার গাছের সঠিক রোগ নির্ণয়ের জন্য, অনুগ্রহ করে নিচের প্রশ্নগুলোর থেকে একটি বেছে নিন।
                        </p>
                    </div>

                    <div className="max-w-[90%] sm:max-w-xl ml-10 sm:ml-14 space-y-2">
                        <button className="w-full flex justify-between items-center bg-[#F5F5DC] p-3 rounded-xl text-left shadow text-sm sm:text-base">
                            গাছের পাতার এই রোগ গুলোকে কি বলে?
                            <span>➜</span>
                        </button>

                        <button className="w-full flex justify-between items-center bg-[#2D5016] p-3 text-white rounded-xl shadow text-sm sm:text-base">
                            এই দাগগুলো কি হলুদ, বাদামী নাকি কালো?
                            <span className="text-white">✔</span>
                        </button>

                        <button className="w-full flex justify-between items-center bg-[#F5F5DC] p-3 rounded-xl text-left shadow text-sm sm:text-base">
                            সমস্যাটি কি সংক্রামক?
                            <span>➜</span>
                        </button>

                        <button className="w-full flex justify-between items-center bg-[#F5F5DC] p-3 rounded-xl text-left shadow text-sm sm:text-base">
                            গাছের এমন অবস্থায় কখন গাছে পানি দেয়া উচিত?
                            <span>➜</span>
                        </button>
                    </div>

                    <div className="flex items-start gap-3">
                        <img
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 bg-[#2D5016]"
                            src={leaf}
                            alt=""
                        />
                        <div className="bg-[#F5F5DC] p-3 sm:p-4 rounded-2xl max-w-[90%] sm:max-w-2xl shadow space-y-3">
                            <p className="text-[14px] sm:text-[15px] leading-relaxed">
                                ধন্যবাদ। হলুদ দাগ সাধারণত পুষ্টির অভাব বা ছত্রাকের আক্রমণের লক্ষণ হতে পারে। আপনি কি এই বিষয়ে আরও বিস্তারিত জানতে চান?
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-[#2D5016] text-white px-4 py-2 rounded-xl text-sm sm:text-base">
                                    হ্যাঁ, বিস্তারিত চাই
                                </button>
                                <button className="bg-white text-[#2D5016] border border-[#2D5016] px-4 py-2 rounded-xl text-sm sm:text-base">
                                    না, ধন্যবাদ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input Section */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white flex items-center gap-3 sm:gap-4">
                    {/* Left Icons */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <img className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer bg-[#2D5016] p-2 rounded-xl" src={camera} alt="camera" />
                        <img className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer bg-[#2D5016] p-2 rounded-xl" src={attachmentImg} alt="attachment" />
                    </div>

                    {/* Input Field */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="আপনার গাছের ছবি আপলোড করুন অথবা গাছ নিয়ে যেকোনো প্রশ্ন লিখুন..."
                            className="w-full bg-[#F5F5DC] rounded-full px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[15px] text-[#2D5016] placeholder:text-[#6C7A5A] outline-none shadow-sm border border-[#DDDDDD]"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <img className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" src={micIcon} alt="mic" />
                        <img className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer bg-[#2D5016] p-2 rounded-xl" src={sendIcon} alt="send" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AIChatbotPage;