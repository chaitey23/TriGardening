import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import { FaChevronRight, FaHeart } from "react-icons/fa";
import star from "../assets/Star.png";
import halfStar from "../assets/halfStar.png";
import detailsArrowImg from '../assets/detailsArrow.png'
import { products } from "./ProductsPage";
import { AuthContext } from "../Context/AuthContext";
import { FaGoogle, FaFacebook } from "react-icons/fa";
const ProductDetailsPage = () => {
    const { user } = useContext(AuthContext);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const handleWriteReviewClick = () => {
        if (!user) {
            setShowLoginModal(true);
        } else {
            setShowReviewModal(true);
        }
    };

    const handleCloseModals = () => {
        setShowLoginModal(false);
        setShowReviewModal(false);
    };
    const { id } = useParams();
    const [size, setSize] = useState("Medium");
    const [potSize, setPotSize] = useState("Medium");
    const [potColor, setPotColor] = useState("brown");
    const [quantity, setQuantity] = useState(1);
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex justify-center items-center text-gray-500 text-xl">
                Product not found!
            </div>
        );
    }

    const Rating = ({ rating, count }) => {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;
        return (
            <div className="flex items-center gap-1 sm:gap-2 mt-2">
                {[...Array(fullStars)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-4 h-4 sm:w-5 sm:h-5" />
                ))}
                {hasHalf && <img src={halfStar} alt="half star" className="w-4 h-4 sm:w-5 sm:h-5" />}
                <span className="text-[#2D5016] text-sm ml-1">({count} Reviews)</span>
            </div>
        );
    };

    const alsoLike = products.filter((p) => p.id !== product.id).slice(0, 5);

    return (
        <div className="bg-[#F9FAF9]">
            <div className="max-w-7xl mx-auto mb-16 ">
                <div className="bg-white pt-24">
                    <nav className=" px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
                        <div className="flex py-4 gap-6 text-sm sm:text-base text-gray-700">
                            {[
                                { name: "Plants", match: "Plant" },
                                { name: "Seeds", match: "Seed" },
                                { name: "Medicine", match: "Medicine" },
                                { name: "Fertilizers", match: "Fertilizer" },
                                { name: "Equipments", match: "Equipment" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={`/products?category=${item.match}`}
                                    className={`whitespace-nowrap ${product.category === item.match
                                        ? "text-[#7A9B57] font-medium underline"
                                        : "hover:text-[#2D5016]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Breadcrumb */}
                    <div className="max-w-7xl mx-auto px-4 pb-4">
                        <div className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600">
                            <Link to="/" className="hover:text-[#2D5016]">Home</Link>
                            <FaChevronRight className="w-3 h-3" />
                            <Link to="/products" className="hover:text-[#2D5016]">Products</Link>
                            <FaChevronRight className="w-3 h-3" />
                            <span className="text-[#7A9B57] font-medium">{product.category}</span>
                            <FaChevronRight className="w-3 h-3" />
                            <span className="text-[#7A9B57] font-semibold">{product.title}</span>
                        </div>
                    </div>
                </div>
                <div className=" min-h-screen py-10 px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-10">
                    {/* Left: Product Details */}
                    <div className="lg:w-2/3 flex flex-col lg:flex-row gap-8">
                        {/* Product Image */}
                        <div className="flex flex-col items-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] lg:h-[400px] object-cover rounded-xl"
                            />
                            <div className="flex gap-3 mt-4">
                                {[product.image, product.image, product.image].map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md border border-gray-200 cursor-pointer hover:border-[#2D5016]"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#2D5016]">{product.title}</h2>
                            <Rating rating={product.rating} count={product.count} />
                            <p className="text-gray-500 mt-2 text-sm">{product.category}</p>

                            {/* Size */}
                            <div className="mt-5">
                                <h4 className="text-gray-800 font-medium mb-2">Size</h4>
                                <div className="flex gap-3 flex-wrap">
                                    {["Small", "Medium", "Large"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => setSize(item)}
                                            className={`px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${size === item
                                                ? "border-green-600 bg-green-100"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            {item === "Small" ? "৳ 240" : item === "Medium" ? "৳ 350" : "৳ 450"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Pot Size */}
                            <div className="mt-5">
                                <h4 className="text-gray-800 font-medium mb-2">Include Pot</h4>
                                <div className="flex gap-3 flex-wrap">
                                    {["Small", "Medium", "Large"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => setPotSize(item)}
                                            className={`px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${potSize === item
                                                ? "border-green-600 bg-green-100"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            {item === "Small" ? "৳ 100" : item === "Medium" ? "৳ 130" : "৳ 170"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Pot Color */}
                            <div className="mt-5">
                                <h4 className="text-gray-800 font-medium mb-2">Pot Color</h4>
                                <div className="flex gap-4">
                                    <div
                                        onClick={() => setPotColor("white")}
                                        className={`w-6 h-6 rounded-full border cursor-pointer ${potColor === "white" ? "ring-2 ring-green-600" : ""
                                            } bg-white border-gray-500`}
                                    />
                                    <div
                                        onClick={() => setPotColor("brown")}
                                        className={`w-6 h-6 rounded-full border cursor-pointer ${potColor === "brown" ? "ring-2 ring-green-600" : ""
                                            } bg-[#8B4513] border-gray-300`}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-gray-600 text-sm leading-relaxed ">
                                গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum) ঘর সাজানোর জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট। এর হৃদয় আকৃতির
                                <span className="text-[#CC7722] cursor-pointer">See more...</span>
                            </p>

                            {/* Price & Quantity */}
                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <p className="text-2xl sm:text-3xl text-[#CC7722] font-semibold">{product.price}</p>
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <div className="flex flex-1 items-center gap-4">
                                    <button className="bg-[#2D5016] text-white px-8 py-3 rounded-lg hover:bg-[#3c6d23] transition w-full lg:w-full sm:w-auto">
                                        Add to Cart
                                    </button>
                                    <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer text-2xl" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: You may also like */}
                    <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-md h-fit">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">You may also like</h3>
                        <div className="flex flex-col gap-4">
                            {alsoLike.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                                    <img src={item.image} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover" />
                                    <div>
                                        <h4 className="text-gray-800 font-medium text-sm sm:text-base">{item.title}</h4>
                                        <p className="text-gray-500 text-xs sm:text-sm">{item.category}</p>
                                        <p className="text-[#CC7722] text-xs sm:text-sm font-semibold">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Description Section */}
                <div className=" px-4 sm:px-6 lg:px-0  mt-10">
                    <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-[#2D5016] mb-4">Description</h2>
                        <p className="text-[#2D5016] leading-relaxed text-sm sm:text-base">
                            গোল্ডেন পাথোস ঘর সাজানোর জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্লান্ট।
                            এটির হৃদয় আকৃতির সবুজ পাতায় সোনালী-হলুদ রঙের নকশা থাকে, যা ঘরের যে কোনো কোণ
                            উজ্জ্বল ও প্রাণবন্ত করে তোলে। এই গাছটি খুবই সহনশীল—কম আলো, মাঝারি আলো কিংবা উজ্জ্বল
                            পরোক্ষ আলো সব জায়গাতেই মানিয়ে নিতে পারে। তাই নতুন যারা গাছ রাখতে চান,
                            তাদের জন্য এটি একটি পারফেক্ট পছন্দ।
                            <br /><br />
                            গোল্ডেন পাথোস শুধু সৌন্দর্য যোগ করে না, বরং ঘরের বাতাসও বিশুদ্ধ করে
                            এবং চারপাশকে আরও স্বাস্থ্যকর করে তোলে। ঝুলন্ত টব, শেলফ বা টেবিলে রাখলে
                            এর লতানো ডাল ছড়িয়ে পড়ে, যা নিয়মিত সুন্দরভাবে বেড়ে ওঠে
                            এবং ঘরের সাজে একটি প্রাকৃতিক সতেজতা আনে।
                        </p>
                        <div className="flex justify-center mt-4">
                            <img className="w-8 h-8" src={detailsArrowImg} alt="arrow" />
                        </div>
                    </div>
                </div>
                <div className=" px-4 sm:px-6 lg:px-0 mt-10 mb-10 ">
                    <h1 className="text-[#2D5016] text-3xl font-bold text-center mb-10">Related Products</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products
                            .filter((p) => p.id !== product.id)
                            .slice(0, 4)
                            .map((product) => (
                                <div
                                    key={product.id}
                                    className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-[200px] sm:h-[220px] lg:h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="px-4 sm:px-6 py-4">
                                        <h1 className="text-[#2D5016] text-base sm:text-lg lg:text-xl font-semibold truncate">
                                            {product.title}
                                        </h1>
                                        <p className="text-[#A7A7A7] text-xs sm:text-sm">{product.category}</p>

                                        <p className="mt-2 text-[#CC7722] font-bold text-lg sm:text-xl">
                                            {product.price}
                                        </p>

                                        <Rating rating={product.rating} count={product.count} />

                                        <button className="bg-[#2D5016] text-white w-full py-2 sm:py-3 mt-5 rounded-xl text-sm sm:text-base transition-all duration-300 hover:bg-[#3c6a1e]">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Customer Reviews & Ratings Section */}
                <div className=" px-4 sm:px-6 lg:px-0 mt-12 ">
                    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
                        <h1 className="text-3xl font-bold text-[#2D5016] mb-2">Customer Reviews & Ratings</h1>
                        <p className="text-[#2D5016] text-lg mb-8">See what other gardeners are saying about this product</p>

                        <div className="flex flex-col lg:flex-row gap-8 pb-6 border-b border-gray-200 ">
                            {/* Left: Overall Rating */}
                            <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 px-4 sm:px-6 lg:px-0">
                                <div className="text-center lg:text-left">
                                    <div className="text-5xl font-bold text-[#2D5016]">4.7</div>
                                    <div className="mt-2 flex justify-center lg:justify-start gap-1">
                                        <img src={star} alt="star" className="w-6 h-6" />
                                        <img src={star} alt="star" className="w-6 h-6" />
                                        <img src={star} alt="star" className="w-6 h-6" />
                                        <img src={star} alt="star" className="w-6 h-6" />
                                        <img src={halfStar} alt="half star" className="w-6 h-6" />
                                    </div>
                                    <div className="text-gray-600 mt-1">(24 Reviews)</div>
                                </div>

                                <p className="text-gray-700 text-center lg:text-left">Based on 1,247 reviews</p>
                            </div>

                            {/* Right: Rating Breakdown */}
                            <div className="flex-1 space-y-3 px-4 sm:px-6 lg:px-0">
                                {[
                                    { star: 5, width: '68%', count: 847 },
                                    { star: 4, width: '22%', count: 274 },
                                    { star: 3, width: '6%', count: 75 },
                                    { star: 2, width: '3%', count: 37 },
                                    { star: 1, width: '1%', count: 14 },
                                ].map((item) => (
                                    <div key={item.star} className="flex items-center gap-3">
                                        <span className="text-sm text-gray-700 w-12">{item.star} Star</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: item.width }}></div>
                                        </div>
                                        <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <button onClick={handleWriteReviewClick} className="bg-[#2D5016] text-white px-6 py-3 rounded-lg hover:bg-[#3c6d23] transition w-full sm:w-auto cursor-pointer">
                                Write Review
                            </button>
                        </div>
                        {showLoginModal && (
                            <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
                                <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md p-6 sm:p-8">
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            Login to your Account
                                        </h2>
                                        <p className="text-gray-600 text-base sm:text-lg">To Write Review</p>
                                    </div>

                                    {/* Social Login */}
                                    <div className="flex gap-3 sm:gap-4 mb-6">
                                        <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                                            <FaGoogle className="text-red-500" />
                                            <span className="text-sm sm:text-base">Google</span>
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-[#166FE5] transition-colors duration-200">
                                            <FaFacebook className="text-white" />
                                            <span className="text-sm sm:text-base">Facebook</span>
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
                                    <form className="space-y-5">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center text-sm text-gray-700">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-[#2D5016] focus:ring-[#2D5016] border-gray-300 rounded mr-2"
                                                />
                                                Remember Me
                                            </label>
                                            <a href="#" className="text-sm font-medium text-[#2D5016] hover:text-[#2D5016]/80">
                                                Forgot Password?
                                            </a>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#2D5016] text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:bg-[#2D5016]/90 focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:ring-offset-2 transition-colors"
                                        >
                                            Login
                                        </button>
                                    </form>

                                    <div className="mt-6 text-center">
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Don't have an account?{" "}
                                            <a href="#" className="font-medium text-[#2D5016] hover:text-[#2D5016]/80 transition-colors">
                                                Register
                                            </a>
                                        </p>
                                    </div>

                                    {/* Close Button */}
                                    <button
                                        onClick={handleCloseModals}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}


                        {/* Review Writing Modal */}
                        {showReviewModal && (
                            <div className="fixed inset-0  bg-opacity-40 flex items-center justify-center z-50 p-4">
                                <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                            Write a Review
                                        </h2>
                                        <p className="text-gray-600 text-base sm:text-lg">
                                            Share your experience with {product.title}
                                        </p>
                                    </div>

                                    {/* Rating Section */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                                            Your Rating
                                        </label>
                                        <div className="flex gap-2 justify-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    className="text-2xl sm:text-3xl text-gray-300 hover:text-yellow-400 focus:outline-none"
                                                >
                                                    ★
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Review Form */}
                                    <form className="space-y-5 sm:space-y-6">
                                        <div>
                                            <label
                                                htmlFor="review-title"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Review Title
                                            </label>
                                            <input
                                                id="review-title"
                                                name="review-title"
                                                type="text"
                                                placeholder="Give your review a title"
                                                className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="review-text"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Your Review
                                            </label>
                                            <textarea
                                                id="review-text"
                                                name="review-text"
                                                rows="5"
                                                placeholder="Share your experience with this product..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                            <button
                                                type="button"
                                                onClick={handleCloseModals}
                                                className="flex-1 bg-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 bg-[#2D5016] text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#3c6d23] transition-colors"
                                            >
                                                Submit Review
                                            </button>
                                        </div>
                                    </form>

                                    {/* Close Button */}
                                    <button
                                        onClick={handleCloseModals}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="px-4 sm:px-6 lg:px-0 ">
                    <div className="mt-8 mb-8 bg-white rounded-2xl p-4 shadow-sm">
                        <h1 className="text-3xl font-bold text-[#2D5016] mb-6">Review Highlights</h1>
                        <div className="flex flex-wrap gap-3 justify-start">
                            <span className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold border border-green-200 text-center shadow-sm hover:shadow-md transition-shadow">Easy to Grow</span>
                            <span className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full text-sm font-semibold border border-yellow-200 text-center shadow-sm hover:shadow-md transition-shadow">Great Value</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold border border-blue-200 text-center shadow-sm hover:shadow-md transition-shadow">Smarter Than Expected</span>
                            <span className="bg-pink-100 text-pink-800 px-3 py-2 rounded-full text-sm font-semibold border border-pink-200 text-center shadow-sm hover:shadow-md transition-shadow">Healthy Plant</span>
                            <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-semibold border border-purple-200 text-center shadow-sm hover:shadow-md transition-shadow">Fast Delivery</span>
                            <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-semibold border border-orange-200 text-center shadow-sm hover:shadow-md transition-shadow">Good Packaging</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 px-4 sm:px-6 lg:px-0  ">

                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src={product.authorImage}
                                alt="Author"
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#2D5016] "
                            />
                            <div className="flex-1 space-y-4">

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className=" items-center gap-3">
                                        <h3 className="text-black font-bold text-xl">{product.authorName}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="bg-[#EEF7E7] text-[#2D5016] text-sm px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D5016">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                                Verified Purchase
                                            </span>
                                            <p className="text-[#7A9B57] text-sm font-medium">
                                                4 Days ago
                                            </p>
                                            <div className="text-[#7A9B57] text-sm hidden lg:block">
                                                (12 September, 2025)
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={halfStar} alt="half star" className="w-5 h-5" />
                                    </div>
                                </div>




                                {/* Review Text */}
                                <div className="border border-[#E0E0E0] rounded-xl p-5 bg-white">
                                    <p className="text-[#2D5016] text-base leading-relaxed">
                                        এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
                                    </p>
                                </div>

                                {/* Helpful Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6 text-[#2D5016] text-sm">
                                        <button className="flex items-center gap-2 hover:underline font-medium">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#2D5016"
                                            >
                                                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3zM22 10a3 3 0 0 0-3-3h-5.28l.84-4.17A2 2 0 0 0 12.6 1L7 6.6V22h10.38a2 2 0 0 0 2-1.56l2.11-9.44A3 3 0 0 0 22 10Z" />
                                            </svg>
                                            Helpful (2)
                                        </button>
                                        <button className="flex items-center gap-2 hover:underline font-medium">
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

                                {/* Company Reply */}
                                <div className="border-l-4 border-[#7A9B57] bg-[#E8F5E9] rounded-r-lg p-5 mt-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#2D5016] font-bold text-base">Reply from TriGardening</span>
                                        <span className="text-[#7A9B57] text-sm">(12 September, 2025)</span>
                                    </div>
                                    <p className="text-[#2D5016] text-sm leading-relaxed">
                                        আপনাকে অনেক ধন্যবাদ আমাদের গাছ নিয়ে এত সুন্দর অভিজ্ঞতা শেয়ার করার জন্য। আপনার বাগানে গাছটা ভালোভাবে বেড়ে উঠছে জেনে আমরা ভীষণ খুশি। ভবিষ্যতেও আপনাকে মানসম্মত গাছ ও গার্ডেনিং সামগ্রী দেওয়ার প্রতিশ্রুতি দিচ্ছি। শুভকামনা রইলো ।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src={product.authorImage}
                                alt="Author"
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#2D5016] "
                            />
                            <div className="flex-1 space-y-4">

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className=" items-center gap-3">
                                        <h3 className="text-black font-bold text-xl">{product.authorName}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="bg-[#EEF7E7] text-[#2D5016] text-sm px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D5016">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                                Verified Purchase
                                            </span>
                                            <p className="text-[#7A9B57] text-sm font-medium">
                                                4 Days ago
                                            </p>
                                            <div className="text-[#7A9B57] text-sm hidden lg:block">
                                                (12 September, 2025)
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={halfStar} alt="half star" className="w-5 h-5" />
                                    </div>
                                </div>




                                {/* Review Text */}
                                <div className="border border-[#E0E0E0] rounded-xl p-5 bg-white">
                                    <p className="text-[#2D5016] text-base leading-relaxed">
                                        গাছের মান ভালো ছিল, প্যাকেজিংও দারুণ হয়েছে। শুধু ছবির তুলনায় গাছটা একটু ছোট হওয়ায় ৪ স্টার দিলাম। তারপরও কেনাকাটা নিয়ে খুশি এবং আবারও কিনতে চাই।
                                    </p>
                                </div>

                                {/* Helpful Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6 text-[#2D5016] text-sm">
                                        <button className="flex items-center gap-2 hover:underline font-medium">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#2D5016"
                                            >
                                                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3zM22 10a3 3 0 0 0-3-3h-5.28l.84-4.17A2 2 0 0 0 12.6 1L7 6.6V22h10.38a2 2 0 0 0 2-1.56l2.11-9.44A3 3 0 0 0 22 10Z" />
                                            </svg>
                                            Helpful (2)
                                        </button>
                                        <button className="flex items-center gap-2 hover:underline font-medium">
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

                                {/* Company Reply */}
                                <div className="border-l-4 border-[#7A9B57] bg-[#E8F5E9] rounded-r-lg p-5 mt-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#2D5016] font-bold text-base">Reply from TriGardening</span>
                                        <span className="text-[#7A9B57] text-sm">(12 September, 2025)</span>
                                    </div>
                                    <p className="text-[#2D5016] text-sm leading-relaxed">
                                        আপনার মতামতের জন্য ধন্যবাদ। গাছের মান ও প্যাকেজিং ভালো লেগেছে জেনে আমরা খুশি। সাইজের ব্যাপারটা আমরা নোট করে নিচ্ছি, ভবিষ্যতে আরও স্পষ্টভাবে উল্লেখ করার চেষ্টা করবো। আপনার সন্তুষ্টিই আমাদের সবচেয়ে বড় অগ্রাধিকার। আবারও আপনাকে সেবা দেওয়ার অপেক্ষায় রইলাম ।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-sm">
                        <div className="flex gap-4">
                            <img
                                src={product.authorImage}
                                alt="Author"
                                className="w-14 h-14 rounded-full object-cover border-2 border-[#2D5016] "
                            />
                            <div className="flex-1 space-y-4">

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div className=" items-center gap-3">
                                        <h3 className="text-black font-bold text-xl">{product.authorName}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="bg-[#EEF7E7] text-[#2D5016] text-sm px-3 py-1 rounded-full flex items-center gap-1 font-medium">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#2D5016">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                                Verified Purchase
                                            </span>
                                            <p className="text-[#7A9B57] text-sm font-medium">
                                                4 Days ago
                                            </p>
                                            <div className="text-[#7A9B57] text-sm hidden lg:block">
                                                (12 September, 2025)
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={star} alt="star" className="w-5 h-5" />
                                        <img src={halfStar} alt="half star" className="w-5 h-5" />
                                    </div>
                                </div>




                                {/* Review Text */}
                                <div className="border border-[#E0E0E0] rounded-xl p-5 bg-white">
                                    <p className="text-[#2D5016] text-base leading-relaxed">
                                        এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
                                    </p>
                                </div>

                                {/* Helpful Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6 text-[#2D5016] text-sm">
                                        <button className="flex items-center gap-2 hover:underline font-medium">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="#2D5016"
                                            >
                                                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3zM22 10a3 3 0 0 0-3-3h-5.28l.84-4.17A2 2 0 0 0 12.6 1L7 6.6V22h10.38a2 2 0 0 0 2-1.56l2.11-9.44A3 3 0 0 0 22 10Z" />
                                            </svg>
                                            Helpful (2)
                                        </button>
                                        <button className="flex items-center gap-2 hover:underline font-medium">
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

                                {/* Company Reply */}
                                <div className="border-l-4 border-[#7A9B57] bg-[#F8F8F8] rounded-r-lg p-5 mt-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[#2D5016] font-bold text-base">Reply from TriGardening</span>
                                        <span className="text-[#7A9B57] text-sm">(12 September, 2025)</span>
                                    </div>
                                    <p className="text-[#2D5016] text-sm leading-relaxed">
                                        আপনাকে অনেক ধন্যবাদ আমাদের গাছ নিয়ে এত সুন্দর অভিজ্ঞতা শেয়ার করার জন্য। আপনার বাগানে গাছটা ভালোভাবে বেড়ে উঠছে জেনে আমরা ভীষণ খুশি। ভবিষ্যতেও আপনাকে মানসম্মত গাছ ও গার্ডেনিং সামগ্রী দেওয়ার প্রতিশ্রুতি দিচ্ছি। শুভকামনা রইলো ।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button className="btn btn-outline text-[#7A9B57] px-6 py-2 sm:px-8 sm:py-3">
                            Load More Reviews
                        </button>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;
