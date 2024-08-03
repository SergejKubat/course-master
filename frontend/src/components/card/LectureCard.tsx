import { Dispatch, SetStateAction } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

import ILectureResponse from "../../models/responses/ILectureResponse";

interface ILectureCardProps {
    lecture: ILectureResponse;
    isPurchased: boolean;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const LectureCard = (props: ILectureCardProps) => {
    const handleSelect = () => {
        if (props.lecture.public || props.isPurchased) {
            props.setSelectedLecture(props.lecture);
        }
    };

    return (
        <div
            className={`flex items-center gap-x-2 my-1 py-2${props.lecture.public || props.isPurchased ? " cursor-pointer" : ""}`}
            onClick={handleSelect}
        >
            {props.lecture.public || props.isPurchased ? (
                <AiFillPlayCircle className="text-[20px] text-blue-600" />
            ) : (
                <FaLock className="text-[20px] text-red-600" />
            )}
            <p className={`text-[14px] font-semibold${props.lecture.public || props.isPurchased ? " hover:text-gray-400" : ""}`}>
                {props.lecture.title}
            </p>
        </div>
    );
};

export default LectureCard;
