import React from 'react';
import aboutImg from '../assets/aboutCover.jpg';
import gardenerImg from '../assets/gardener1.jpg'
import gardener2Img from '../assets/gardener2.jpg'
import aboutIcon1 from '../assets/icon1.png';
import aboutIcon2 from '../assets/Earth Care.png';
import aboutIcon3 from '../assets/icon2.png';
import communityIcon from '../assets/community.png';
import youtubeIcon from '../assets/Youtube.png';
import phoneIcon from '../assets/call.png'
import facebookIcon from '../assets/facebook.png'
import whatsappIcon from '../assets/whatsApp.png'
const AboutPage = () => {
    return (
        <div className="pt-4 lg:pt-20">
            <div className="relative">
                <img
                    className="w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover"
                    src={aboutImg}
                    alt=""
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>

                <div
                    className="
                        absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        text-center w-full
                        px-4 sm:px-8
                    "
                >
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
                        Your Trusted Partner in <br /> Gardening
                    </h1>

                    <p className="mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-xl text-white leading-relaxed">
                        Cultivating expertise, growing communities, and nurturing your <br />
                        green dreams for over a decade
                    </p>

                    <button
                        className="
                            bg-[#CC7722] hover:bg-[#b5691d] text-white
                            px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-3
                            rounded-full cursor-pointer
                            text-base sm:text-lg lg:text-xl
                            mt-4 lg:mt-6
                        "
                    >
                        Meet Our Team
                    </button>
                </div>
            </div>
            <div className='mt-12 mb-20 px-4 sm:px-6 lg:px-0'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-6'>
                    Meet Our Gardening Experts
                </h1>
                <p className='text-xl text-[#2D5016] text-center mb-10'>Our passionate team of horticulturists and plant specialists brings years of <br /> combined experience to help your garden flourish
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto text-center'>
                    <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                        <img className='w-38 h-38  rounded-full  mx-auto object-cover filter grayscale ' src={gardenerImg} alt="Plant" />
                        <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Aminul Islam Sagor</h1>
                        <h1 className='mt-2 text-sm sm:text-base lg:text-lg text-[#7A9B57] font-semibold '>CEO & Gardening Expert</h1>
                        <p className='text-[14px] mt-2'>With years of hands on gardening experience, Sagor leads Trigardening with passion and expertise, ensuring our customers always get the best advice, experience and quality.</p>
                    </div>
                    <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                        <img className='w-38 h-38  rounded-full  mx-auto object-cover filter grayscale ' src={gardener2Img} alt="Plant" />
                        <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Marium Nipu</h1>
                        <h1 className='mt-2 text-sm sm:text-base lg:text-lg text-[#7A9B57] font-semibold '>Plant Care Specialist
                        </h1>
                        <p className='text-[14px] mt-2'>From creative gardening blogs to personalized plant consultancy, Nipu helps our community learn, grow, and stay inspired.</p>
                    </div>
                    <div className='bg-[#F5F5DC] p-6 sm:p-8 lg:p-12 rounded-2xl'>
                        <img className='w-38 h-38  rounded-full  mx-auto object-cover filter grayscale ' src={gardenerImg} alt="Plant" />
                        <h1 className='font-bold mt-3 text-lg sm:text-xl lg:text-2xl'>Aminul Islam Sagor</h1>
                        <h1 className='mt-2 text-sm sm:text-base lg:text-lg text-[#7A9B57] font-semibold '>CEO & Gardening Expert</h1>
                        <p className='text-[14px] mt-2'>With years of hands on gardening experience, Sagor leads Trigardening with passion and expertise, ensuring our customers always get the best advice, experience and quality.</p>
                    </div>



                </div>
                <div>

                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-0 bg-[#F5F5DC] py-12 lg:py-20">


                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2D5016] font-bold text-center mb-4 sm:mb-6">
                    Our Commitment to You
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#2D5016] text-center mb-10 leading-relaxed">
                    We're dedicated to providing you with the knowledge, tools, and support needed <br className="hidden sm:block" />
                    for gardening success
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto text-center">

                    <div className="p-6 sm:p-8 lg:p-10 rounded-2xl">
                        <img
                            className="w-14 h-14 p-2 bg-white rounded-full mx-auto"
                            src={aboutIcon1}
                            alt="Plant"
                        />
                        <h1 className="font-bold mt-3 text-lg sm:text-xl lg:text-xl">
                            Plant Clinic Analysis
                        </h1>
                        <p className="text-sm sm:text-base text-[#2D5016] mt-2 leading-relaxed">
                            Get expert diagnosis for plant problems with our AI analysis service. Upload photos and receive detailed treatment plans.
                        </p>
                    </div>


                    <div className="p-6 sm:p-8 lg:p-10  rounded-2xl">
                        <img
                            className="w-14 h-14 p-2 bg-white rounded-full mx-auto"
                            src={aboutIcon3}
                            alt="Plant"
                        />
                        <h1 className="font-bold mt-3 text-lg sm:text-xl lg:text-xl">
                            Expert Blog Content
                        </h1>
                        <p className="text-sm sm:text-base text-[#2D5016] mt-2 leading-relaxed">
                            Access weekly articles, seasonal guides, and in-depth tutorials written by certified horticulturists.
                        </p>
                    </div>


                    <div className="p-6 sm:p-8 lg:p-10  rounded-2xl">
                        <img
                            className="w-14 h-14 p-2 bg-white rounded-full mx-auto"
                            src={aboutIcon2}
                            alt="Plant"
                        />
                        <h1 className="font-bold mt-3 text-lg sm:text-xl lg:text-xl">
                            Satisfaction Guarantee
                        </h1>
                        <p className="text-sm sm:text-base text-[#2D5016] mt-2 leading-relaxed">
                            We stand behind our advice and products. If you're not satisfied, we'll work with you until we find the right solution.
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#7A9B57] py-12">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-4 sm:mb-6">
                        Join Our TriGardening Community
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-white text-center mb-12 leading-relaxed max-w-3xl mx-auto">
                        We're dedicated to providing you with the knowledge, tools, and support needed for gardening success
                    </p>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">

                        {/* Left Content */}
                        <div className="space-y-8 lg:w-1/2">
                            <div className="flex items-start gap-4">
                                <img src={communityIcon} className="w-10 h-10" />
                                <div>
                                    <h1 className="text-white font-semibold text-lg sm:text-xl">Facebook Community Forum</h1>
                                    <p className="text-white text-sm sm:text-base leading-relaxed">
                                        Connect with 10,000+ gardeners across Bangladesh...
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <img src={youtubeIcon} className="w-10 h-10" />
                                <div>
                                    <h1 className="text-white font-semibold text-lg sm:text-xl">Trigardening YouTube Channel</h1>
                                    <p className="text-white text-sm sm:text-base leading-relaxed">
                                        Join us on YouTube for quick gardening tips...
                                    </p>
                                </div>
                            </div>

                            <button className="bg-white text-[#2D5016] px-5 py-3 rounded-full font-semibold shadow-md hover:bg-[#f0f0f0] transition">
                                Join Our Community
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2">
                            <img src={aboutImg} className="rounded-2xl w-full max-w-[500px] mx-auto object-cover" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6">

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D5016] text-center">
                    Get In Touch
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-[#2D5016] text-center mt-2 mb-12">
                    Have questions? We're here to help you grow your gardening knowledge
                </p>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT SIDE CONTACT INFO */}
                    <div className="space-y-8 p-4  lg:p-10 ">

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#7A9B57] rounded-full flex items-center justify-center">
                                <img src={phoneIcon} className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-[#2D5016] font-semibold text-lg">Phone</h3>
                                <p className="text-gray-600 text-sm">01712-452342</p>
                            </div>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#7A9B57] rounded-full flex items-center justify-center">
                                <img src={facebookIcon} className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-[#2D5016] font-semibold text-lg">Facebook Page</h3>
                                <p className="text-gray-600 text-sm">fb.com/gardening.tri</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#7A9B57] rounded-full flex items-center justify-center">
                                <img src={whatsappIcon} className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-[#2D5016] font-semibold text-lg">Whatsapp</h3>
                                <p className="text-gray-600 text-sm">01712-452342</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Your Name" className="border border-[#B7B7B7] rounded-lg p-3 w-full outline-none" />
                            <input type="email" placeholder="Your Email" className="border border-[#B7B7B7] rounded-lg p-3 w-full outline-none" />
                        </div>

                        <input type="text" placeholder="Subject" className="border border-[#B7B7B7] rounded-lg p-3 w-full outline-none mb-4" />

                        <textarea placeholder="Your Message" rows="4" className="border border-[#B7B7B7] rounded-lg p-3 w-full outline-none mb-6"></textarea>

                        <button className="w-full bg-[#7A9B57] text-white py-3 rounded-lg font-semibold hover:bg-[#698c46] transition">
                            Send Message
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default AboutPage;
