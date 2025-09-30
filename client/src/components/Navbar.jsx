// import { Link } from "react-router-dom";





// const Navbar = () => {

//     return (
//         <>
//             <nav className="bg-gray-900 text-gray-300 shadow-lg sticky top-0 z-50">
//                 <div className="container mx-auto px-6 py-4">
//                     <div className="flex justify-between items-center">
//                         <a href="#" className="text-2xl font-bold text-white">
//                             <span className="text-yellow-400">Foodie</span>Land
//                         </a>

//                         <ul className="hidden md:flex items-center space-x-6">
//                             <li><Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link></li>
//                             <li><Link to="/menu" className="hover:text-yellow-400 transition-colors duration-300">Our Menu</Link></li>
//                             <li><Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
//                             <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link></li>
//                             <li>
//                                 <Link to="/login" className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
//                                     Login
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/signup" className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
//                                     Sign Up
//                                 </Link>
//                             </li>
//                         </ul>

//                         <div className="md:hidden">
//                             <button id="mobile-menu-button" className="text-gray-300 hover:text-white focus:outline-none">
//                                 <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div id="mobile-menu" className="hidden md:hidden bg-gray-900">
//                     <ul className="flex flex-col items-center space-y-4 py-4">
//                         <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
//                         <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Our Menu</a></li>
//                         <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
//                         <li><a href="#" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
//                         <li>
//                             <a href="#" className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
//                                 Login
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;





import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // true if token exists
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <nav className="bg-gray-900 text-gray-300 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-white">
                        <span className="text-yellow-400">Foodie</span>Land
                    </a>

                    <ul className="hidden md:flex items-center space-x-6">
                        {!isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/menu" className="hover:text-yellow-400 transition-colors duration-300">
                                        Our Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/signup"
                                        className="bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-300"
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/dash" className="hover:text-yellow-400 transition-colors duration-300">
                                        Dashboard
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/addtocart" className="hover:text-yellow-400 transition-colors duration-300">
                                        Add to Cart
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/cart" className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-300">
                                        Cart
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white font-bold px-4 py-2 rounded-md hover:bg-red-400 transition-colors duration-300"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

