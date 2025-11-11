import React from 'react';
import blogCover from '../assets/Rectangle 14.png'
import card1 from '../assets/Rectangle 21.png';
import card2 from '../assets/Rectangle 21 (1).png';
import card3 from '../assets/Rectangle 21 (2).png';
import card4 from '../assets/Rectangle 21 (3).png';
import writerImg from '../assets/Shape.png'
import authorImg from '../assets/blogAuthor.png'
import { Link } from 'react-router';

export const blogData = [
    {
        "id": 1,
        "image": card1,
        "type": "Plan Type",
        "title": "10 Essential Tips for Indoor Plant Care",
        "authorImage": authorImg,
        "authorName": "Ivantie Chowdhury",
        "description": "Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips.",
        "writer": "Anna Shvets",
        "date": "September 19, 2025",
        "readingTime": "5 min read"
    },
    {
        "id": 2,
        "image": card2,
        "type": "Plan Type",
        "title": "How to Keep Pests Away from Your Garden",
        "authorImage": authorImg,
        "authorName": "Ivantie Chowdhury",
        "description": "Learn natural and effective ways to protect your garden from common pests without harmful chemicals.",
        "date": "September 15, 2025",
        "readingTime": "4 min read"
    },
    {
        "id": 3,
        "image": card3,
        "type": "Plan Type",
        "title": "Creative DIY Garden Projects for Beginners",
        "authorImage": authorImg,
        "authorName": "Ivantie Chowdhury",
        "description": "Step-by-step guide to fun and easy DIY projects to enhance your garden space.",

        "date": "September 10, 2025",
        "readingTime": "6 min read"
    },
    {
        "id": 4,
        "image": card4,
        "type": "Plan Type",
        "title": "Preparing Your Garden for the Upcoming Season",
        "authorImage": authorImg,
        "authorName": "Ivantie Chowdhury",
        "description": "Essential seasonal tips to ensure your garden thrives all year round.",
        "date": "September 5, 2025",
        "readingTime": "5 min read"
    }
]
const BlogPage = ({ id }) => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen pt-24 px-4 sm:px-6 lg:px-8'>
            <h1 className="text-[#404040] text-3xl sm:text-4xl font-semibold text-center">
                The TriGardening Journal
            </h1>
            <p className="text-lg sm:text-xl mb-10 text-[#404040] text-center">
                Your slogan goes here
            </p>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Main Content */}
                <div className="lg:w-3/4 space-y-8 cursor-pointer">
                    <div className='relative'>
                        <img src={blogCover} alt="" className="w-full rounded-xl object-cover" />
                        <div className='absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 text-white'>
                            <h1 className="text-xl sm:text-3xl font-bold drop-shadow-lg">
                                Your Blogpost Title goes here:
                            </h1>
                            <p className="text-sm sm:text-base mt-1 drop-shadow-md">
                                Your blogpost first paragraph sentence goes here....
                            </p>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 text-xs sm:text-sm">
                                <img
                                    src={writerImg}
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                                />
                                <span className="drop-shadow-md">Writer’s Name</span>
                                <span className="drop-shadow-md">•</span>
                                <span className="drop-shadow-md">September 19, 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {blogData.map((item) => (
                            <Link to={`/blogs/${item.id}`} key={item.id}>
                                <div className="bg-white rounded-xl p-3 shadow hover:shadow-lg transition-shadow">
                                    <img src={item.image} className="w-full rounded-lg object-cover" />
                                    <h1 className='text-[#42C847] mt-2 text-sm sm:text-base'>{item.type}</h1>
                                    <h2 className="text-[#404040] font-semibold text-base sm:text-lg mt-1">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-[#404040] text-sm sm:text-base mb-2 truncate">
                                        {item.description}
                                    </p>
                                    <div className='flex justify-between text-xs sm:text-sm text-gray-600'>
                                        <span>{item.date}</span>
                                        <span>{item.readingTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-[#7A9B57] text-white px-10 sm:px-14 py-2.5 sm:py-3 rounded-lg hover:bg-[#3a6720] transition-colors font-medium text-sm sm:text-[15px] mb-20">
                            Load More Articles
                        </button>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:w-1/4 space-y-6">
                    {/* Search Box */}
                    <div className="bg-white rounded-xl p-6 shadow">
                        <h2 className="text-lg sm:text-xl font-semibold text-[#404040] mb-3">
                            Search Blog
                        </h2>
                        <div className="flex items-center bg-[#F5F5F5] rounded-lg px-3 py-2">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-transparent outline-none text-[#404040] text-sm sm:text-base"
                            />
                            <svg width="20" height="20" fill="none" stroke="#A7A7A7">
                                <path d="M11 11l6 6m-3-8a5 5 0 11-10 0 5 5 0 0110 0z" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Blog Categories */}
                    <div className="bg-white rounded-xl p-6 shadow">
                        <h2 className="text-lg sm:text-xl font-semibold text-[#404040] mb-4">
                            Blog Categories
                        </h2>
                        <ul className="space-y-3 text-sm sm:text-base">
                            {[
                                { name: 'Plant Care', count: 12 },
                                { name: 'Pest Control', count: 7 },
                                { name: 'DIY Gardening', count: 11 },
                                { name: 'Seasonal Tips', count: 20 },
                                { name: 'Sustainability', count: 4 },
                            ].map((cat, i) => (
                                <li key={i} className="flex justify-between">
                                    <span>{cat.name}</span>
                                    <span className="bg-[#F5F5F5] px-2 sm:px-3 py-1 rounded-lg">{cat.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white rounded-xl p-6 shadow">
                        <h2 className="text-lg sm:text-xl font-semibold text-[#404040] mb-4">
                            Recent Posts
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex gap-3">
                                    <img src={blogCover} className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover" />
                                    <div>
                                        <p className="text-[#404040] font-medium text-sm sm:text-base">
                                            Caring for succulent beginners guide
                                        </p>
                                        <p className="text-[#A7A7A7] text-xs sm:text-sm">May 24, 2025</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
