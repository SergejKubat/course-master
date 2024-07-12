import { Dispatch, SetStateAction } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

import ILectureResponse from "../../models/responses/ILectureResponse";

interface ILectureCardProps {
    lecture: ILectureResponse;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const LectureCard = (props: ILectureCardProps) => {
    const handleSelect = () => {
        if (props.lecture.public) {
            props.setSelectedLecture(props.lecture);
        }
    };

    return (
        <div className={`flex items-center gap-x-2 my-1 py-2${props.lecture.public ? " cursor-pointer" : ""}`} onClick={handleSelect}>
            {props.lecture.public ? (
                <AiFillPlayCircle className="text-[20px] text-blue-600" />
            ) : (
                <FaLock className="text-[20px] text-red-600" />
            )}
            <p className={`text-[14px] font-semibold${props.lecture.public ? " hover:text-gray-400" : ""}`}>{props.lecture.title}</p>
        </div>
    );
};

export default LectureCard;
