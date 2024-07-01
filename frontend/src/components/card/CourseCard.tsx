import { Link } from "react-router-dom";

import { Rating } from "react-simple-star-rating";

import Button from "../form/Button";

import ICoursesResponse from "../../models/responses/ICoursesResponse";

interface ICourseCardProps {
    course: ICoursesResponse;
}

const CourseCard = (props: ICourseCardProps) => {
    return (
        <div className="w-80 border border-gray-600 rounded-2xl">
            <div className="relative">
                <img src={props.course.thumbnailUrl} alt={props.course.title} width={320} height={240} className="rounded-t-2xl" />
                <div className="absolute bottom-0 left-0 w-[320px] py-2 px-4 bg-black bg-opacity-50">
                    <h3 className="font-semibold text-[18px] text-white">{props.course.title}</h3>
                </div>
            </div>
            <div className="py-3 px-4 rounded-2xl">
                <p className="text-[14px] text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minus!</p>
                <div className="flex my-1">
                    <Rating
                        iconsCount={5}
                        initialValue={props.course.averageRating}
                        readonly
                        allowFraction
                        size={24}
                        SVGclassName="inline-block"
                    />
                </div>

                <div className="flex justify-between items-center mt-3">
                    <p className="font-semibold text-[24px]">{props.course.price} $</p>
                    <Link to={`/courses/${props.course.id}`}>
                        <Button className="py-2 px-4 font-medium text-sm text-center text-white bg-blue-500 rounded-2xl hover:bg-blue-600">
                            Details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
