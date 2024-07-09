import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import useDebounce from "../hooks/useDebounce";

import CourseCard from "../components/card/CourseCard";
import Input from "../components/form/Input";
import Spinner from "../components/Spinner";

import IAccountResponse from "../models/responses/IAccountResponse";
import ICoursesResponse from "../models/responses/ICoursesResponse";

const AccountPage = () => {
    const [account, setAccount] = useState<IAccountResponse | null>(null);
    const [courses, setCourses] = useState<ICoursesResponse[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { accountId } = useParams();

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const getAccount = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/${accountId}`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setAccount(data);

            getCourses();
        }
    };

    const getCourses = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/mentors/${accountId}/courses?query=${debouncedSearchQuery}`, {
            method: "GET"
        });

        const data = await response.json();

        if (response.ok) {
            setCourses(data);
        }
    };

    useEffect(() => {
        getAccount().then();
    }, [accountId]);

    useEffect(() => {
        getCourses().then();
    }, [debouncedSearchQuery]);

    if (!account) return <Spinner />;

    return (
        <section className="flex justify-center">
            <div className="max-w-[1200px]">
                <div className="flex flex-col items-center">
                    <img
                        src={account.avatar}
                        alt={`${account.firstName} ${account.lastName}`}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="mt-3 font-bold text-[30px]">
                            {account.firstName} {account.lastName}
                        </h1>
                        <p className="text-[14px]">{account.occupation}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <label className="relative">
                        <FaSearch className="w-[18px] h-[18px] absolute top-1/2 left-3 transform -translate-y-1/2" />
                        <Input
                            placeholder="Search..."
                            value={searchQuery}
                            className="w-[300px] pl-10 text-[18px] rounded-lg xs:w-[350px] xl:w-[376px]"
                            onChange={setSearchQuery}
                        />
                    </label>
                </div>

                <h2 className="mt-10 mb-5 font-semibold text-[20px]">About Me</h2>
                <p>{account.description}</p>

                <div className="mt-5">
                    <h2 className="mb-5 text-[28px] text-center">Courses {courses.length > 0 ? `(${courses.length})` : null}</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountPage;
