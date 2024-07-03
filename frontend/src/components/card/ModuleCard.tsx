import Collapsible from "react-collapsible";

import LectureCard from "./LectureCard";

import IModuleResponse from "../../models/responses/IModuleResponse";
import ILectureResponse from "../../models/responses/ILectureResponse";
import { Dispatch, SetStateAction } from "react";

const lecture: ILectureResponse = {
    id: 1,
    title: "Lecture 1",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maiores. Dolorem fuga quaeodio aut excepturi ratione qui veniam illum.",
    attachmentUrl: "https://www.youtube.com/embed/gfU1iZnjRZM?list=PLBnKlKpPeagl57K9bCw_IXShWQXePnXjY",
    isPublic: false,
    createdAt: "12/10/2023",
    updatedAt: "12/10/2023"
};

const lectures = [lecture, lecture, lecture, lecture, lecture];

interface IModuleCardProps {
    module: IModuleResponse;
    isOpen?: boolean;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const ModuleCard = (props: IModuleCardProps) => {
    return (
        <Collapsible trigger={props.module.title} open={props.isOpen}>
            <p className="mb-3 text-[14px] text-gray-300">{props.module.description}</p>
            {lectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} setSelectedLecture={props.setSelectedLecture} />
            ))}
        </Collapsible>
    );
};

export default ModuleCard;
