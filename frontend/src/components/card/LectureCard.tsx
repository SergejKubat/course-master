import { Dispatch, SetStateAction } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import { FaLock } from "react-icons/fa";

import ILectureResponse from "../../models/responses/ILectureResponse";

interface ILectureCardProps {
    lecture: ILectureResponse;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const LectureCard = (props: ILectureCardProps) => {
    return (
        <div className="flex items-center gap-x-2 my-1 py-2 cursor-pointer" onClick={() => props.setSelectedLecture(props.lecture)}>
            {props.lecture.isPublic ? (
                <AiFillPlayCircle className="text-[20px] text-blue-600" />
            ) : (
                <FaLock className="text-[20px] text-red-600" />
            )}
            <p className="text-[14px] font-semibold">{props.lecture.title}</p>
        </div>
    );
};

export default LectureCard;
