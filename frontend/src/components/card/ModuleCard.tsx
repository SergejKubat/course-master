import { Dispatch, SetStateAction } from "react";

import Collapsible from "react-collapsible";
import { useFlag } from "@unleash/proxy-client-react";

import LectureCard from "./LectureCard";

import IModuleResponse from "../../models/responses/IModuleResponse";
import ILectureResponse from "../../models/responses/ILectureResponse";

import { DARK_MODE } from "../../constants";

interface IModuleCardProps {
    module: IModuleResponse;
    isOpen?: boolean;
    isPurchased: boolean;
    setSelectedLecture: Dispatch<SetStateAction<ILectureResponse | null>>;
}

const ModuleCard = (props: IModuleCardProps) => {
    const darkModeEnabled = useFlag(DARK_MODE);

    return (
        <Collapsible
            trigger={props.module.title}
            open={props.isOpen}
            triggerStyle={{ backgroundColor: darkModeEnabled ? "#171941" : "#2563eb" }}
        >
            <p className="mb-3 text-[14px] dark:text-gray-300">{props.module.description}</p>
            {props.module.lectures.map((lecture) => (
                <LectureCard
                    key={lecture.id}
                    lecture={lecture}
                    isPurchased={props.isPurchased}
                    setSelectedLecture={props.setSelectedLecture}
                />
            ))}
        </Collapsible>
    );
};

export default ModuleCard;
