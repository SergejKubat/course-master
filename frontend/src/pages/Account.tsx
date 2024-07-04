import { useParams } from "react-router-dom";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";

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

const AccountPage = () => {
    const { accountId } = useParams();

    console.log(accountId);

    return (
        <section className="flex flex-col items-center max-w-[1200px] mx-auto">
            <div className="flex justify-between gap-x-10 w-full">
                <div>
                    <h1 className="mt-3 font-bold text-[30px]">John Doe</h1>
                    <p className="text-[14px]">Software Engineer</p>

                    <div className="my-5">
                        <div className="flex items-center gap-x-3">
                            <AiFillStar className="text-[24px]" />
                            <p>4.5 Rating</p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-2">
                            <MdReviews className="text-[24px]" />
                            <p>10 Reviews</p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-2">
                            <BsFillPeopleFill className="text-[24px]" />
                            <p>20 Students</p>
                        </div>
                        <div className="flex items-center gap-x-3 mt-2">
                            <AiFillPlayCircle className="text-[24px]" />
                            <p>2 Courses</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://robohash.org/GIH.png" alt="John Doe" width={200} height={200} className="rounded-full" />
                </div>
            </div>

            <h2 className="mt-10 mb-5 font-semibold text-[20px]">About Me</h2>
            <p>
                Consectetur adipisicing elit. Quam est deserunt, voluptatibus incidunt fugiat fuga quae dicta eaque! Aperiam, quaerat sunt?
                Vero molestiae inventore, facere reiciendis quis voluptatibus! Magni, corporis dolor error dolores aperiam non illum iusto
                deserunt? Perspiciatis, voluptate nostrum alias quos eaque ratione labore quae quas. Distinctio, incidunt?
            </p>
            <h2 className="mt-10 mb-5 font-semibold text-[20px]">Courses (5)</h2>
            <div className="flex flex-wrap justify-center gap-5">
                <CourseCard course={course} />
                <CourseCard course={course} />
            </div>
        </section>
    );
};

export default AccountPage;
