import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import AccountDropdown from "../components/AccountDropdown";

import Logo from "../assets/logo.png";

const Navbar = () => {
    const { account } = useAuth();

    return (
        <header className="mb-10">
            <nav className="bg-gray-950">
                <div className="flex justify-between items-center mx-auto p-4">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={Logo} alt="CourseMaster Logo" width={48} height={48} />
                        <h1 className="self-center text-2xl font-semibold italic text-white">
                            Course<span className="text-blue-300">Master</span>
                        </h1>
                    </Link>
                    <div>
                        {account ? (
                            <AccountDropdown />
                        ) : (
                            <ul className="flex gap-5">
                                <li>
                                    <Link to="/login" className="block py-2 px-3 font-semibold text-white rounded-2xl hover:text-blue-400">
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="block py-2 px-3 font-semibold text-white rounded-2xl hover:text-blue-400"
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
