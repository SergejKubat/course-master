import { useParams, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

import ModuleContainer from "../../components/container/ModuleContainer";
import ReviewContainer from "../../components/container/ReviewContainer";
import Button from "../../components/form/Button";

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
    const { courseId } = useParams();

    console.log(courseId);

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <div className="flex justify-between gap-x-10 w-full">
                <div>
                    <p className="text-sm">Web Development</p>
                    <h1 className="font-bold text-[36px]">Python For Beginners</h1>
                    <Link to={`/accounts/${1}`}>
                        <div className="flex items-center gap-x-2 my-2">
                            <img src="https://robohash.org/GIH.png" alt="John Doe" width={48} height={48} />
                            <h3 className="font-semibold">John Doe</h3>
                        </div>
                    </Link>
                    <div className="flex items-end gap-x-2 mt-3">
                        <div className="flex">
                            <Rating iconsCount={5} initialValue={4.5} readonly allowFraction size={24} SVGclassName="inline-block" />
                        </div>
                        <p className="font-bold text-[18px]">4.5</p>
                    </div>

                    <div className="my-5">
                        <div className="flex items-center gap-x-2">
                            <PiStudentFill className="text-[20px]" />
                            <p>12 students</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <IoIosPricetags className="text-[20px]" />
                            <p>19.99 $</p>
                        </div>
                        <div className="flex items-center gap-x-2 mt-2">
                            <MdUpdate className="text-[20px]" />
                            <p>Last updated: 12/10/2023</p>
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
                    <img src="https://picsum.photos/320/240" alt="Python For Begginers" className="rounded-2xl" />
                </div>
            </div>

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Description</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laborum nemo quas explicabo praesentium tenetur, cum iusto
                eum placeat aliquam? Necessitatibus, facilis animi debitis ex accusantium temporibus molestias magnam ducimus illo iusto
                dolores non iste labore voluptas, harum asperiores deserunt, quam eaque. Iste rerum cum quos non, molestiae eaque asperiores
                totam ea eveniet qui in magni, voluptas suscipit quisquam excepturi quaerat nisi est? Voluptatem magnam nemo incidunt
                placeat doloremque dolor vel dolores, eveniet, eligendi quam est sapiente aperiam ipsa rerum, omnis tenetur animi! Repellat,
                nam fugit neque unde libero laudantium soluta a qui quidem repellendus nobis quisquam laboriosam obcaecati ea!
            </p>
            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Course Content</h2>
            <ModuleContainer modules={modules} />
            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Reviews ({reviews.length})</h2>
            <ReviewContainer reviews={reviews} />
        </section>
    );
};

export default CoursePage;
