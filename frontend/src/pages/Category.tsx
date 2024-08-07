import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useFlag } from "@unleash/proxy-client-react";

import useDebounce from "../hooks/useDebounce";

import CourseCard from "../components/card/CourseCard";
import Search from "../components/form/Search";
import Spinner from "../components/Spinner";

import ICategoryResponse from "../models/responses/ICategoryResponse";
import ICoursesResponse from "../models/responses/ICoursesResponse";

import { SEARCH_CATEGORY_COURSES } from "../constants";

const CategoryPage = () => {
    const [category, setCategory] = useState<ICategoryResponse | null>(null);
    const [courses, setCourses] = useState<ICoursesResponse[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { categoryId } = useParams();

    const searchCategoryCoursesEnabled = useFlag(SEARCH_CATEGORY_COURSES);

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const getCategory = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories/${categoryId}`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setCategory(data);

            getCourses();
        }
    };

    const getCourses = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/categories/${categoryId}/courses${
                searchCategoryCoursesEnabled ? `?query=${debouncedSearchQuery}` : ""
            }`,
            { method: "GET" }
        );

        const data = await response.json();

        if (response.ok) {
            setCourses(data);
        }
    };

    useEffect(() => {
        getCategory().then();
    }, [categoryId]);

    useEffect(() => {
        getCourses().then();
    }, [debouncedSearchQuery]);

    if (!category) return <Spinner />;

    return (
        <section className="flex justify-center">
            <div className="max-w-[1200px]">
                <p className="text-sm">Category</p>
                <h1 className="font-bold text-[36px]">{category.name}</h1>
                <p className="my-5">{category.description}</p>

                {searchCategoryCoursesEnabled ? <Search query={searchQuery} setQuery={setSearchQuery} /> : null}

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

export default CategoryPage;
