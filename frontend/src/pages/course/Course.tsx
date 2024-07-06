import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

import ModuleContainer from "../../components/container/ModuleContainer";
import ReviewContainer from "../../components/container/ReviewContainer";
import Spinner from "../../components/Spinner";
import Button from "../../components/form/Button";

import { formatDate } from "../../utils/date";

import ICourseResponse from "../../models/responses/ICourseResponse";
import IModuleResponse from "../../models/responses/IModuleResponse";
import IReviewResponse from "../../models/responses/IReviewResponse";

const module: IModuleResponse = {
    id: 1,
    title: "Intro",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maiores. Dolorem fuga quaeodio aut excepturi ratione qui veniam illum.",
    createdAt: "",
    updatedAt: ""
};

const review: IReviewResponse = {
    id: 1,
    studentId: 1,
    courseId: 1,
    rating: 5,
    comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    createdAt: "25/11/2023"
};

const modules = [module, module, module, module, module];

const reviews = [review, review, review, review, review];

const CoursePage = () => {
    const [course, setCourse] = useState<ICourseResponse | null>(null);

    const { courseId } = useParams();

    const getCourse = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${courseId}`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setCourse(data);
        }
    };

    useEffect(() => {
        getCourse().then();
    }, [courseId]);

    if (!course) return <Spinner />;

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <div className="flex justify-between gap-x-10 w-full">
                <div>
                    <p className="text-sm">Web Development</p>
                    <h1 className="font-bold text-[36px]">{course.title}</h1>
                    <Link to={`/accounts/${1}`}>
                        <div className="flex items-center gap-x-2 my-2">
                            <img src="https://robohash.org/GIH.png" alt="John Doe" width={48} height={48} />
                            <h3 className="font-semibold">John Doe</h3>
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
                        <p className="font-bold text-[18px]">{course.averageRating}</p>
                    </div>

                    <div className="my-5">
                        <div className="flex items-center gap-x-2">
                            <PiStudentFill className="text-[20px]" />
                            <p>12 students</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <IoIosPricetags className="text-[20px]" />
                            <p>{course.price} $</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <MdUpdate className="text-[20px]" />
                            <p>Last updated: {formatDate(course.updatedAt)}</p>
                        </div>
                    </div>

                    <Link to={`/purchase/${1}`}>
                        <Button className="flex items-center gap-x-2 px-6 text-[16px] text-white bg-green-600 enabled:hover:bg-green-700">
                            <FaShoppingCart className="text-[20px]" />
                            <span>Purchase Course</span>
                        </Button>
                    </Link>
                </div>
                <div>
                    <img src={course.thumbnailUrl} alt={course.title} className="rounded-2xl" />
                </div>
            </div>

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Description</h2>
            <p>{course.description}</p>
            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Course Content</h2>
            <ModuleContainer modules={modules} />
            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Reviews ({reviews.length})</h2>
            <ReviewContainer reviews={reviews} />
        </section>
    );
};

export default CoursePage;
