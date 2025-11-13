import React, { useContext, useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Email/Password register
    const handleRegister = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill out all fields');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log('Registered user:', res.user);
                toast.success('Registration successful 🎉');
                setEmail('');
                setPassword('');
                // navigate to home page
                setTimeout(() => navigate('/'), 1000);
            })
            .catch(err => {
                console.error(err.message);
                toast.error(err.message);
            });
    };

    // Google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log('Google user:', res.user);
                toast.success('Logged in with Google 🎉');
                setTimeout(() => navigate('/'), 1000);
            })
            .catch(err => {
                console.error(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-center text-3xl font-bold text-gray-900">Register</h2>

                {/* Social Login */}
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        <FaFacebook /> Facebook
                    </button>
                </div>

                {/* Email/Password Form */}
                <form className="space-y-4" onSubmit={handleRegister}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-green-800 transition"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-green-800 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
