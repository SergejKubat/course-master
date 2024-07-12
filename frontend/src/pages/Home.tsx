import { useState, useEffect } from "react";

import { useFlag } from "@unleash/proxy-client-react";

import CategoryCard from "../components/card/CategoryCard";
import CourseCard from "../components/card/CourseCard";
import Spinner from "../components/Spinner";

import ICategoriesResponse from "../models/responses/ICategoriesResponse";
import ICoursesResponse from "../models/responses/ICoursesResponse";

import Logo from "../assets/logo.png";

const HomePage = () => {
    const [categories, setCategories] = useState<ICategoriesResponse[]>([]);
    const [popularCourses, setPopularCourses] = useState<ICoursesResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const popularCoursesEnabled = useFlag("popularCourses");

    const getCategories = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories/`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setCategories(data);
        }
    };

    const getPopularCourses = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/popular`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setPopularCourses(data);
        }
    };

    useEffect(() => {
        getCategories().then();

        if (popularCoursesEnabled) {
            getPopularCourses().then();
        }

        setLoading(false);
    }, [popularCoursesEnabled]);

    if (loading) return <Spinner />;

    return (
        <section className="flex flex-col items-center gap-y-10 p-5">
            <div className="flex flex-col items-center gap-y-5 w-[640px]">
                <img src={Logo} alt="CourseMaster Logo" width={128} height={128} />
                <h1 className="font-bold text-[36px]">
                    Welcome to{" "}
                    <span className="italic">
                        Course<span className="text-blue-300">Master</span>
                    </span>
                </h1>
                <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae pulvinar magna. Suspendisse orci sapien,
                    scelerisque vel metus vel, laoreet viverra elit. Nulla gravida sapien eget magna consectetur, a consequat diam congue.
                    Cras gravida consequat ante, ac mollis nisl elementum ut.
                </p>
            </div>

            <div>
                <h2 className="mb-5 text-[28px] text-center">Categories</h2>
                <div className="flex flex-wrap justify-center gap-5">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>

            {popularCoursesEnabled ? (
                <div>
                    <h2 className="mb-5 text-[28px] text-center">Popular Courses</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {popularCourses.map((popularCourse) => (
                            <CourseCard course={popularCourse} />
                        ))}
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default HomePage;
