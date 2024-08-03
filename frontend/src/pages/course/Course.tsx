import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { useFlag } from "@unleash/proxy-client-react";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

import { useAuth } from "../../contexts/AuthContext";

import ModuleContainer from "../../components/container/ModuleContainer";
import ReviewContainer from "../../components/container/ReviewContainer";
import CourseCard from "../../components/card/CourseCard";
import Spinner from "../../components/Spinner";
import Button from "../../components/form/Button";

import { formatDate } from "../../utils/date";

import ICourseResponse from "../../models/responses/ICourseResponse";
import ICoursesResponse from "../../models/responses/ICoursesResponse";
import IModuleResponse from "../../models/responses/IModuleResponse";

import { RECOMMENDED_COURSES, COURSES_DISCOUNT } from "../../constants";

const CoursePage = () => {
    const [course, setCourse] = useState<ICourseResponse | null>(null);
    const [modules, setModules] = useState<IModuleResponse[]>([]);
    const [recommendedCourses, setRecommendedCourses] = useState<ICoursesResponse[]>([]);
    const [isPurchased, setIsPurchased] = useState<boolean>(false);

    const { courseId } = useParams();

    const recommendedCoursesEnabled = useFlag(RECOMMENDED_COURSES);
    const coursesDiscountEnabled = useFlag(COURSES_DISCOUNT);

    const { account } = useAuth();

    const getCourse = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${courseId}`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setCourse(data);

            getModules();

            if (recommendedCoursesEnabled) {
                getRecommendedCourses(data.category.id);
            }
        }
    };

    const getModules = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${courseId}/modules`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setModules(data);
        }
    };

    const getRecommendedCourses = async (categoryId: number) => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/categories/${categoryId}/courses`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setRecommendedCourses(data.filter((x: ICoursesResponse) => x.id !== parseInt(courseId!)));
        }
    };

    const checkIsPurchased = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/transactions?accountId=${account!.id}&courseId=${courseId}`, {
            method: "GET"
        });

        const data = await response.json();

        if (response.ok) {
            setIsPurchased(data.isPurchased);
        }
    };

    useEffect(() => {
        getCourse().then();

        if (account) {
            checkIsPurchased().then();
        }
    }, [courseId, account, recommendedCoursesEnabled]);

    if (!course) return <Spinner />;

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <div className="flex justify-between gap-x-10 w-full">
                <div>
                    <Link to={`/categories/${course.category.id}`} className="text-sm hover:text-gray-400">
                        {course.category.name}
                    </Link>
                    <h1 className="font-bold text-[36px]">{course.title}</h1>
                    <Link to={`/accounts/${course.mentor.id}`}>
                        <div className="flex items-center gap-x-2 my-2">
                            <img
                                src={course.mentor.avatar}
                                alt={`${course.mentor.firstName} ${course.mentor.lastName}`}
                                width={48}
                                height={48}
                            />
                            <h3 className="font-semibold">
                                {course.mentor.firstName} {course.mentor.lastName}
                            </h3>
                        </div>
                    </Link>
                    <div className="flex items-end gap-x-2 mt-3">
                        <div className="flex">
                            <Rating
                                iconsCount={5}
                                initialValue={course.averageRating}
                                readonly
                                allowFraction
                                size={24}
                                SVGclassName="inline-block"
                            />
                        </div>
                        <p className="font-bold text-[18px]">{course.averageRating.toFixed(2)}</p>
                    </div>

                    <div className="my-5">
                        <div className="flex items-center gap-x-2">
                            <PiStudentFill className="text-[20px]" />
                            <p>{course.studentsCount} students</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <IoIosPricetags className="text-[20px]" />
                            <p>
                                <span className={coursesDiscountEnabled ? "line-through" : ""}>{course.price}</span>{" "}
                                {coursesDiscountEnabled ? (course.price - course.price / 10).toFixed(2) : null} $
                            </p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <MdUpdate className="text-[20px]" />
                            <p>Last updated: {formatDate(course.updatedAt)}</p>
                        </div>
                    </div>

                    {account && !isPurchased ? (
                        <Link to={`/purchase/${course.id}`}>
                            <Button className="flex items-center gap-x-2 px-6 text-[16px] text-white bg-green-600 enabled:hover:bg-green-700">
                                <FaShoppingCart className="text-[20px]" />
                                <span>Purchase Course</span>
                            </Button>
                        </Link>
                    ) : null}
                </div>
                <div>
                    <img src={course.thumbnailUrl} alt={course.title} className="rounded-2xl" />
                </div>
            </div>

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Description</h2>
            <p>{course.description}</p>

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Course Content</h2>
            <ModuleContainer modules={modules} isPurchased={isPurchased} />

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Reviews</h2>
            <ReviewContainer courseId={course.id} isPurchased={isPurchased} />

            {recommendedCoursesEnabled ? (
                <div>
                    <h2 className="mt-5 mb-5 text-[28px] text-center">Recommended Courses</h2>
                    <div className="flex flex-wrap justify-center gap-5">
                        {recommendedCourses.map((recommendedCourse) => (
                            <CourseCard key={recommendedCourse.id} course={recommendedCourse} />
                        ))}
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default CoursePage;
