import Collapsible from "react-collapsible";

import LectureCard from "./LectureCard";

import IModuleResponse from "../../models/responses/IModuleResponse";
import ILectureResponse from "../../models/responses/ILectureResponse";
import { Dispatch, SetStateAction } from "react";

interface IModuleCardProps {
    module: IModuleResponse;
    isOpen?: boolean;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const ModuleCard = (props: IModuleCardProps) => {
    return (
        <Collapsible trigger={props.module.title} open={props.isOpen}>
            <p className="mb-3 text-[14px] text-gray-300">{props.module.description}</p>
            {props.module.lectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} setSelectedLecture={props.setSelectedLecture} />
            ))}
        </Collapsible>
    );
};

export default ModuleCard;
