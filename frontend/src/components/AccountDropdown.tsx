import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import { useAuth } from "../contexts/AuthContext";

import OutsideAlerter from "../hooks/useOutsideClick";

import Button from "./form/Button";

const AccountDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const { account, logout } = useAuth();

    const handleLogout = () => {
        setIsDropdownOpen(false);
        logout();
        navigate("/login");
    };

    if (!account) return;

    return (
        <div className="absolute top-[-8px] right-0 flex justify-between items-center h-24 py-0 md:py-0">
            <div className="flex flex-col items-end w-full p-4 select-none">
                <div
                    className="flex items-center gap-0 w-fit pb-1 bg-blue-800 dark:bg-gray-800 rounded-xl cursor-pointer hover:bg-blue-900 dark:hover:bg-gray-900 sm:gap-x-3 sm:py-1.5 sm:px-3"
                    onClick={() => {
                        if (!isDropdownOpen) {
                            setIsDropdownOpen(true);
                        }
                    }}
                >
                    {account.avatar ? (
                        <img
                            src={account.avatar}
                            alt={account.username}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px] rounded-full"
                        />
                    ) : (
                        <FaUser className="w-[36px] h-[36px] text-gray-300" />
                    )}
                    <div>
                        <div className="hidden sm:block">
                            <p className="font-semibold text-white">
                                {account.firstName} {account.lastName}
                            </p>
                            <p className="text-[14px] text-white">@{account.username}</p>
                            {isDropdownOpen ? (
                                <OutsideAlerter callback={() => setIsDropdownOpen(false)}>
                                    <div className="absolute top-0 right-[16px] w-[180px] bg-blue-800 dark:bg-gray-800 rounded-xl shadow-lg z-10 sm:top-[80px]">
                                        <Link
                                            to="/account"
                                            className="block py-2 px-4 text-[16px] text-white dark:text-gray-300 border-b border-gray-300 hover:text-gray-400"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Account
                                        </Link>
                                        <Button
                                            className="block w-full py-2 px-4 text-left text-white dark:text-gray-300 hover:text-gray-400"
                                            onClick={handleLogout}
                                        >
                                            Log Out
                                        </Button>
                                    </div>
                                </OutsideAlerter>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDropdown;
