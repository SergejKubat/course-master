import { Dispatch, SetStateAction } from "react";

import { FaTimes } from "react-icons/fa";

import ILectureResponse from "../../models/responses/ILectureResponse";

interface IPreviewLectureModalProps {
    lecture: ILectureResponse;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const PreviewLectureModal = (props: IPreviewLectureModalProps) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative w-[640px] py-6 px-4 bg-white dark:bg-gray-950 rounded-2xl">
                <FaTimes
                    className="absolute top-[12px] right-[12px] text-xl text-gray-600 dark:text-gray-100 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={() => props.setShowModal(false)}
                />
                <h2 className="mb-2 text-[24px] text-center">{props.lecture.title}</h2>
                <p className="text-[14px]">{props.lecture.description}</p>
                <div className="flex mt-5">
                    <iframe
                        width="auto"
                        height="auto"
                        src={props.lecture.attachmentUrl}
                        title={props.lecture.title}
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                        className="grow min-h-[325px]"
                    />
                </div>
            </div>
            <div className="fixed inset-0 bg-black opacity-80 -z-10" />
        </div>
    );
};

export default PreviewLectureModal;
