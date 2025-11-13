import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import leafPlant from '../assets/Pexels Photo by Fabian Stroobants.png';
import monstera from '../assets/Group 6.png';
import vermi from '../assets/medicine.png';
import { Link } from 'react-router';

const CheckOutPage = () => {
    const { user } = useContext(AuthContext);
    const [selectedAddress, setSelectedAddress] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        division: '',
        district: '',
        fullAddress: '',
        email: '',
        secondaryNumber: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Checkout data:', formData);
    };

    const userAddresses = [
        {
            id: 1,
            division: 'Khulna',
            district: 'Bagerhat',
            address: '1/3 A Mobles Golf, Sokarpona, Bagerhat'
        },
        {
            id: 2,
            division: 'Khulna',
            district: 'Bagerhat',
            address: '2/4 B Mobles Golf, Sokarpona, Bagerhat'
        }
    ];

    const cartItems = [
        {
            name: "Fiddle Leaf Plant",
            pot: "6\" Pot",
            price: "৳ 300",
            quantity: 2,
            image: leafPlant
        },
        {
            name: "Monstero Delisioso",
            pot: "6\" Pot",
            price: "৳ 300",
            quantity: 2,
            image: monstera
        },
        {
            name: "Vermi Compost",
            pot: "6\" Pot",
            price: "৳ 300",
            quantity: 2,
            image: vermi
        }
    ];

    const subtotal = 900;
    const deliveryCharge = 100;
    const total = subtotal + deliveryCharge;

    return (
        <div className="min-h-screen bg-[#F3F3F3] py-8 pt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Progress Indicator Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 bg-white rounded-2xl p-3">
                        {/* Shopping Cart Step */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#2D5016] flex items-center justify-center mb-1">
                                <span className="text-white font-semibold text-xs">1</span>
                            </div>
                            <span className="text-xs font-medium text-[#2D5016]">Shopping Cart</span>
                        </div>

                        {/* Connector Line */}
                        <div className="flex-1 h-0.5 bg-[#2D5016] max-w-12 sm:max-w-16 md:max-w-24"></div>

                        {/* Review & Checkout Step - Active */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#2D5016] flex items-center justify-center mb-1">
                                <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <span className="text-xs font-bold text-[#2D5016]">Review & Checkout</span>
                        </div>

                        {/* Connector Line */}
                        <div className="flex-1 h-0.5 bg-gray-300 max-w-12 sm:max-w-16 md:max-w-24"></div>

                        {/* Order Confirmed Step */}
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mb-1">
                                <span className="text-gray-600 font-semibold text-xs">3</span>
                            </div>
                            <span className="text-xs font-medium text-gray-500">Order Confirmed</span>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Review & Checkout</h1>
                    <p className="text-gray-600 cursor-pointer hover:text-[#2D5016]">Back to Cart</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Checkout Form OR Address Selection */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            {!user ? (
                                <>
                                    <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                        <p className="text-yellow-800 text-sm">
                                            <strong>You're shopping anonymously.</strong> Fill up the form below to continue
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="Enter your full name"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    placeholder="Enter your phone number"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                />
                                            </div>
                                        </div>


                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Division *
                                                </label>
                                                <select
                                                    name="division"
                                                    value={formData.division}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                >
                                                    <option value="">Select Division</option>
                                                    <option value="khulna">Khulna</option>
                                                    <option value="dhaka">Dhaka</option>
                                                    <option value="chattogram">Chattogram</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    District *
                                                </label>
                                                <select
                                                    name="district"
                                                    value={formData.district}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                >
                                                    <option value="">Select District</option>
                                                    <option value="bagerhat">Bagerhat</option>
                                                    <option value="khulna">Khulna</option>
                                                    <option value="satkhira">Satkhira</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Full Address */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Address (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                name="fullAddress"
                                                placeholder="Enter your full address"
                                                value={formData.fullAddress}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                            />
                                        </div>

                                        {/* Email & Secondary Number */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address (Optional)
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email address"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Secondary Number (Optional)
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="secondaryNumber"
                                                    placeholder="Enter your phone number"
                                                    value={formData.secondaryNumber}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        {/* Password Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] transition-colors"
                                            />
                                        </div>

                                        <Link to='/confirm'>
                                            <button
                                                type="submit"
                                                className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#3c6d23] transition-colors mt-6"
                                            >
                                                Proceed to Payment
                                            </button>
                                        </Link>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 text-sm">
                                            <strong>Welcome back, {user.displayName || user.email}!</strong> Please select a shipping address
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <h2 className="text-xl font-semibold text-gray-800">Shipping Address</h2>

                                        {/* Address Selection */}
                                        <div className="space-y-4">
                                            {userAddresses.map(address => (
                                                <div
                                                    key={address.id}
                                                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedAddress === address.id
                                                        ? 'border-[#2D5016] bg-green-50'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                        }`}
                                                    onClick={() => setSelectedAddress(address.id)}
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h3 className="font-semibold text-gray-800">
                                                                Address {address.id}
                                                            </h3>
                                                            <div className="mt-2 space-y-1 text-gray-600">
                                                                <p><strong>Division:</strong> {address.division}</p>
                                                                <p><strong>District:</strong> {address.district}</p>
                                                                <p><strong>Address:</strong> {address.address}</p>
                                                            </div>
                                                        </div>
                                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedAddress === address.id
                                                            ? 'bg-[#2D5016] border-[#2D5016]'
                                                            : 'border-gray-400'
                                                            }`}>
                                                            {selectedAddress === address.id && (
                                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => {
                                                // Proceed to payment with selected address
                                                console.log('Selected address:', selectedAddress);
                                            }}
                                            className="w-full bg-[#2D5016] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#3c6d23] transition-colors mt-6"
                                        >
                                            Proceed to Payment
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            {/* Cart Items with Images */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 border-b border-gray-200 pb-4">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-grow">
                                            <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                                            <p className="text-gray-600 text-xs">{item.pot}</p>
                                            <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="flex-shrink-0">
                                            <span className="font-semibold text-gray-800 text-sm">{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Sub Total</span>
                                    <span className="font-semibold">৳ {subtotal}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Delivery Charge</span>
                                    <span className="font-semibold">৳ {deliveryCharge}</span>
                                </div>

                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">Total</span>
                                        <span className="text-xl font-bold text-[#2D5016]">৳ {total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Proceed to Checkout Button */}
                            <Link to='/confirm'>
                                <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-semibold hover:bg-[#3c6d23] transition-colors mt-6">
                                    Submit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;