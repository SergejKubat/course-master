import { useState } from "react";

import { BsFillCollectionFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";

import ModuleCard from "../card/ModuleCard";
import PreviewLectureModal from "../modal/PreviewLectureModal";

import IModuleResponse from "../../models/responses/IModuleResponse";
import ILectureResponse from "../../models/responses/ILectureResponse";

interface IModuleContainerProps {
    modules: IModuleResponse[];
}

const ModuleContainer = (props: IModuleContainerProps) => {
    const [selectedLecture, setSelectedLecture] = useState<ILectureResponse | null>(null);

    return (
        <div className="w-full mt-5">
            <div className="flex justify-between mb-5">
                <div className="flex items-center gap-x-2">
                    <BsFillCollectionFill />
                    <p>{props.modules.length} Modules</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <FaCirclePlay />
                    <p>{props.modules.reduce((acc, module) => acc + module.lectures.length, 0)} Lectures</p>
                </div>
            </div>
            {props.modules.map((module, index) => (
                <ModuleCard key={module.id} module={module} isOpen={index === 0} setSelectedLecture={setSelectedLecture} />
            ))}

            {selectedLecture ? <PreviewLectureModal lecture={selectedLecture} setShowModal={() => setSelectedLecture(null)} /> : null}
        </div>
    );
};

export default ModuleContainer;
