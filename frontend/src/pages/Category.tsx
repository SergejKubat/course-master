import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import useDebounce from "../hooks/useDebounce";

import Input from "../components/form/Input";
import CourseCard from "../components/card/CourseCard";

import ICoursesResponse from "../models/responses/ICoursesResponse";

const course: ICoursesResponse = {
    id: 1,
    mentorId: 1,
    title: "Python For Beginners",
    thumbnailUrl: "https://picsum.photos/320/240",
    price: 19.99,
    averageRating: 4.5
};

const CategoryPage = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const { categoryId } = useParams();

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    useEffect(() => {
        console.log("query: ", debouncedSearchQuery);
    }, [debouncedSearchQuery]);

    console.log(categoryId);

    return (
        <section className="flex justify-center">
            <div className="max-w-[1200px]">
                <p className="text-sm">Category</p>
                <h1 className="font-bold text-[36px]">Web Development</h1>
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat quo id at molestiae cupiditate ipsam dolor adipisci
                    itaque provident saepe assumenda facere, neque ipsa inventore consequatur quae sit sunt nisi eos, vero voluptatibus
                    debitis sequi optio. Cumque, debitis tempore. Asperiores id deleniti temporibus deserunt labore ipsa, eius possimus
                    ipsum voluptatum quos aut necessitatibus ex perferendis! Laborum totam tempora iure nisi quaerat eligendi qui amet quis
                    veritatis, tempore sit similique, voluptatum perferendis nesciunt quam tenetur repellat esse, quasi consequatur cum
                    animi aspernatur minus incidunt. Pariatur ducimus incidunt hic dolorem numquam animi! Asperiores velit veritatis, culpa
                    doloremque placeat dolore molestias autem.
                </p>

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

                <div className="mt-5">
                    <h2 className="mb-5 text-[28px] text-center">Courses (5)</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryPage;
