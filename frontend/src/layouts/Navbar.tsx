import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="bg-gray-950">
            <div className="flex justify-between items-center mx-auto p-4">
                <Link to="/" className="flex items-center gap-3">
                    <img src={Logo} alt="Flowbite Logo" width={48} height={48} />
                    <h1 className="self-center text-2xl font-semibold italic text-white">
                        Course<span className="text-blue-300">Master</span>
                    </h1>
                </Link>
                <div>
                    <ul className="flex gap-5">
                        <li>
                            <Link to="/search" className="block py-2 px-3 text-white rounded-2xl hover:bg-blue-700">
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-in" className="block py-2 px-3 text-white rounded-2xl hover:bg-blue-700">
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-up" className="block py-2 px-3 text-white rounded-2xl hover:bg-blue-700">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
