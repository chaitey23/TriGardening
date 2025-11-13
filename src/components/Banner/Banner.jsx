// import React from 'react';
// import bannerImg from '../../assets/Banner.png';
// import banner2Img from '../../assets/banner2.jpg'
// import banner3Img from '../../assets/aboutCover.jpg';

// const Banner = () => {
//     return (
//         <div className='' >
//             <div className='relative'>
//                 <img className='w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover' src={bannerImg} alt="" />
//                 <div className='absolute top-1/2 left-0 transform -translate-y-1/2 px-4 sm:px-8 lg:px-24 py-6 sm:py-12 lg:py-24 '>
//                     <h1 className='text-white text-xl lg:text-6xl font-bold'>Nurture Your Green Paradise</h1>
//                     <p className=' mt-4 text-[18px]  lg:text-2xl text-white'>Your slogan goes here</p>
//                     <div className='flex space-x-3 sm:space-x-2 lg:space-x-6 mt-8 '>
//                         <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>Shop Now</button>
//                         <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>Call Now</button>
//                     </div>
//                 </div>
//                 <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
//                     <span className="w-3 h-3 rounded-full bg-[#CC7722]"></span>
//                     <span className="w-3 h-3 rounded-full bg-white/50"></span>
//                     <span className="w-3 h-3 rounded-full bg-white/50"></span>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Banner;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bannerImg from '../../assets/Banner.png';
import banner2Img from '../../assets/banner2.jpg';
import banner3Img from '../../assets/aboutCover.jpg';

const Banner = () => {
    // Banner data directly in the component
    const bannerData = [
        {
            id: 1,
            image: bannerImg,
            title: 'Nurture Your Green Paradise',
            subtitle: 'Your slogan goes here',
            button1: 'Shop Now',
            button2: 'Call Now'
        },
        {
            id: 2,
            image: banner2Img,
            title: 'Discover Beautiful Plants',
            subtitle: 'Enhance your living space',
            button1: 'Explore More',
            button2: 'Contact Us'
        },
        {
            id: 3,
            image: banner3Img,
            title: 'Quality Gardening Supplies',
            subtitle: 'Everything you need for your garden',
            button1: 'View Products',
            button2: 'Get Advice'
        }
    ];

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {bannerData.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className='relative'>
                            <img
                                className='w-full h-[300px] sm:h-[400px] lg:h-[700px] object-cover'
                                src={banner.image}
                                alt={banner.title}
                            />
                            <div className='absolute top-1/2 left-0 transform -translate-y-1/2 px-4 sm:px-8 lg:px-24 py-6 sm:py-12 lg:py-24'>
                                <h1 className='text-white text-xl lg:text-6xl font-bold'>{banner.title}</h1>
                                <p className='mt-4 text-[18px] lg:text-2xl text-white'>{banner.subtitle}</p>
                                <div className='flex space-x-3 sm:space-x-2 lg:space-x-6 mt-8'>
                                    <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>
                                        {banner.button1}
                                    </button>
                                    <button className='bg-[#CC7722] hover:bg-[#b5691d] text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-15 lg:py-4 rounded-full cursor-pointer text-xl'>
                                        {banner.button2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="custom-pagination absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10"></div>

        </div>
    );
};

export default Banner;