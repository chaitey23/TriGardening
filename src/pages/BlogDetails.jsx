import React from 'react';
import { useParams } from 'react-router';
import { blogData } from './BlogPage';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find(b => b.id === parseInt(id));

    if (!blog) return <div>Blog not found!</div>;

    return (
        <div className="bg-[#F3F3F3] pt-24 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT CONTENT */}
                    <div className="lg:w-3/4 space-y-8">

                        {/* MAIN CONTENT CARD */}
                        <div className="bg-white rounded-xl shadow overflow-hidden space-y-6">

                            {/* Cover Image */}
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-[220px] sm:h-[350px] lg:h-[420px] object-cover rounded-xl"
                            />

                            {/* Meta */}
                            <div className="space-y-3 p-4 sm:p-6 ">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <p className="text-[#42C847] text-base sm:text-lg font-semibold">
                                        {blog.type}
                                    </p>

                                    <div className="flex items-center gap-4 text-[#A7A7A7] text-xs sm:text-sm">
                                        <span>{blog.readingTime}</span>
                                        <span>{blog.date}</span>
                                    </div>
                                </div>

                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#404040]">
                                    {blog.title}
                                </h1>

                                <p className="text-[#404040] leading-7 text-sm sm:text-base whitespace-pre-line">
                                    {blog.description}
                                </p>
                            </div>
                        </div>

                        {/* COMMENTS */}
                        <div className="bg-white rounded-xl p-4 sm:p-6 shadow space-y-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-[#404040]">
                                Comments
                            </h2>

                            {/* Comment Input */}
                            <textarea
                                className="w-full border-[#E0E0E0] border  p-3 rounded-lg outline-none text-sm sm:text-base resize-none"
                                placeholder="Write your comment"
                                rows="3"
                            />

                            <div className="flex justify-end">
                                <button className="bg-[#2D5016] text-white px-8 py-2 rounded-lg hover:bg-[#3a6720] transition text-sm sm:text-base">
                                    Submit
                                </button>
                            </div>


                            <div className="flex gap-3 sm:gap-4">

                                {/* Author Image */}
                                <img
                                    src={blog.authorImage}
                                    alt="Author"
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                                />
                                <div className="flex-1 space-y-2">
                                    {/* Author Name */}
                                    <p className="text-black font-semibold text-[16px] sm:text-[18px]">
                                        {blog.authorName}
                                    </p>
                                    <div className='flex  gap-2 space-y-4'>
                                        <span className="bg-[#EEF7E7] text-[#2D5016] text-xs sm:text-sm px-2 rounded-full flex items-center gap-1">
                                            <svg width="12" height="12" fill="#2D5016">
                                                <path d="M10 3L5 9 2 6" stroke="#2D5016" strokeWidth="2" fill="none" />
                                            </svg>
                                            Verified Purchase
                                        </span>

                                        {/* Date */}
                                        <p className="text-[#7A9B57] text-xs sm:text-sm">
                                            4 Days ago (12 September, 2025)
                                        </p>
                                    </div>


                                    {/* Comment Text Box */}
                                    <div className=" border border-[#E0E0E0] rounded-xl p-3 sm:p-4">
                                        <p className="text-[#2D5016] text-xs leading-6">
                                            এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার বাগানে দারুণভাবে বেড়ে উঠছে।
                                            এর মান আমার প্রত্যাশার থেকেও ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয়
                                            ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-6 mt-2 text-[#2D5016] text-sm">
                                        <button className="flex items-center gap-1 hover:underline">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#2D5016"
                                            >
                                                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3zM22 10a3 3 0 0 0-3-3h-5.28l.84-4.17A2 2 0 0 0 12.6 1L7 6.6V22h10.38a2 2 0 0 0 2-1.56l2.11-9.44A3 3 0 0 0 22 10Z" />
                                            </svg>
                                            Helpful (12)
                                        </button>
                                        <button className="flex items-center gap-1 hover:underline">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#2D5016"
                                            >
                                                <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3zM2 14a3 3 0 0 0 3 3h5.28l-.84 4.17A2 2 0 0 0 11.4 23l5.6-5.6V2H6.62a2 2 0 0 0-2 1.56L2.51 13A3 3 0 0 0 2 14Z" />
                                            </svg>

                                            Not Helpful (0)
                                        </button>

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:w-1/4 space-y-6">

                        {/* SEARCH */}
                        <div className="bg-white rounded-xl p-4 sm:p-5 shadow">
                            <h2 className="text-lg font-semibold text-[#404040] mb-3">Search Blog</h2>

                            <div className="flex items-center bg-[#F5F5F5] rounded-lg px-3 py-2">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full bg-transparent outline-none text-sm sm:text-base"
                                />
                                <svg width="18" height="18" fill="none" stroke="#A7A7A7">
                                    <path strokeWidth="2" strokeLinecap="round" d="M11 11l5 5m-3-8a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* CATEGORIES */}
                        <div className="bg-white rounded-xl p-4 sm:p-5 shadow">
                            <h2 className="text-lg font-semibold text-[#404040] mb-4">Blog Categories</h2>

                            <ul className="space-y-3 text-[#404040] text-sm sm:text-base">
                                {[
                                    { name: 'Plant Care', count: 12 },
                                    { name: 'Pest Control', count: 7 },
                                    { name: 'DIY Gardening', count: 11 },
                                    { name: 'Seasonal Tips', count: 20 },
                                    { name: 'Sustainability', count: 4 },
                                ].map((cat, i) => (
                                    <li key={i} className="flex justify-between items-center">
                                        <span>{cat.name}</span>
                                        <span className="bg-[#F5F5F5] px-2 py-1 rounded-lg text-xs">
                                            {cat.count}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RECENT POSTS */}
                        <div className="bg-white rounded-xl p-4 sm:p-5 shadow">
                            <h2 className="text-lg font-semibold text-[#404040] mb-4">Recent Posts</h2>

                            <div className="space-y-4">
                                {blogData.slice(0, 4).map((item) => (
                                    <div key={item.id} className="flex gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <div className="min-w-0">
                                            <p className="text-[#404040] font-medium text-sm line-clamp-2">
                                                {item.title}
                                            </p>
                                            <p className="text-[#A7A7A7] text-xs mt-1">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
