import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useFlag } from "@unleash/proxy-client-react";

import useDebounce from "../hooks/useDebounce";

import CourseCard from "../components/card/CourseCard";
import Search from "../components/form/Search";
import Spinner from "../components/Spinner";

import IAccountResponse from "../models/responses/IAccountResponse";
import ICoursesResponse from "../models/responses/ICoursesResponse";

import { SEARCH_AUTHOR_COURSES } from "../constants";

const AccountPage = () => {
    const [account, setAccount] = useState<IAccountResponse | null>(null);
    const [courses, setCourses] = useState<ICoursesResponse[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { accountId } = useParams();

    const searchAuthorCoursesEnabled = useFlag(SEARCH_AUTHOR_COURSES);

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
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/mentors/${accountId}/courses${
                searchAuthorCoursesEnabled ? `?query=${debouncedSearchQuery}` : ""
            }`,
            {
                method: "GET"
            }
        );

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
                        <p className="text-center text-[14px]">{account.occupation}</p>
                    </div>
                </div>

                <h2 className="mt-10 mb-5 text-center font-semibold text-[20px]">About Me</h2>
                <p>{account.description}</p>

                {searchAuthorCoursesEnabled ? <Search query={searchQuery} setQuery={setSearchQuery} /> : null}

                <div className="mt-5">
                    <h2 className="mb-5 text-[28px] text-center">Courses {courses.length > 0 ? `(${courses.length})` : null}</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {courses.length > 0 ? (
                            <>
                                {courses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </>
                        ) : (
                            <p>No courses found.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountPage;
