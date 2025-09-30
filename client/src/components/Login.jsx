import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
    </svg>
);

const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "", password: ""
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),



            });
            const data = await response.json();
            console.log("Response:", data);

            if (response.ok) {
                localStorage.setItem("token", data.token);
                alert('successfully login');
                navigate('/dash');

            }

        } catch (error) {
            alert('error!');
            console.error(error);

        }


    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
            <div className="w-full max-w-md mx-auto p-6 md:p-8">
                <div className="bg-gray-900 text-gray-300 rounded-2xl shadow-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white">
                            Welcome to <span className="text-yellow-400">Foodie</span>Land
                        </h2>
                        <p className="text-gray-400 mt-2">Login to your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MailIcon />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
                                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-300"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockIcon />
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
                                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-300"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-400 transition-transform transform hover:scale-105 duration-300"
                        >
                            Login
                        </button>

                        {/* Extra Links */}
                        <div className="text-center mt-6">
                            <Link to="/forgetpassword" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <div className="text-center mt-8 text-sm text-gray-400">
                        <p>Don't have an account? <Link to="/signup" className="font-bold text-yellow-400 hover:underline">Sign Up</Link ></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
