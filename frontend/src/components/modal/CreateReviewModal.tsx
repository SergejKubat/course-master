import { useState, Dispatch, SetStateAction } from "react";

import { Rating } from "react-simple-star-rating";
import { enqueueSnackbar } from "notistack";
import { FaTimes } from "react-icons/fa";

import Textarea from "../form/Textarea";
import Button from "../form/Button";

import IReviewRequest from "../../models/requests/IReviewRequest";

interface ICreateReviewModalProps {
    courseId: number;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

const CreateReviewModal = (props: ICreateReviewModalProps) => {
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState<string>("");
    const [touched, setTouched] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const validateForm = () => {
        if (!rating) {
            enqueueSnackbar("Rating is not provided.", { variant: "error" });
            return false;
        }

        if (comment.length < 3) {
            return false;
        }

        return true;
    };

    const addReview = async () => {
        setTouched(true);

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const data: IReviewRequest = {
            studentId: 1,
            courseId: 1,
            rating: rating,
            comment: comment
        };

        console.log(data);
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="relative w-[400px] py-6 px-4 bg-gray-950 rounded-2xl">
                <FaTimes
                    className="absolute top-[12px] right-[12px] text-xl text-gray-100 cursor-pointer hover:text-gray-200"
                    onClick={() => props.setShowModal(false)}
                />
                <h2 className="mb-2 text-[24px] text-center">Add Review</h2>
                <div className="flex justify-center my-3">
                    <Rating iconsCount={5} size={36} SVGclassName="inline-block" onClick={(rating: number) => setRating(rating)} />
                </div>
                <label htmlFor="commentInput" className="block my-2 font-medium text-sm">
                    Comment
                </label>
                <Textarea
                    id="commentInput"
                    placeholder="Enter description"
                    touched={touched}
                    value={comment}
                    errorMessage="Description is not valid."
                    className="w-full h-[150px]"
                    validation={(value) => value.length >= 3}
                    onChange={setComment}
                />
                <Button
                    disabled={loading}
                    className="w-full mt-4 text-[16px] text-white bg-blue-500 enabled:hover:bg-blue-600 disabled:opacity-75"
                    onClick={addReview}
                >
                    {loading ? "Sending..." : "Send"}
                </Button>
            </div>
            <div className="fixed inset-0 bg-black opacity-80 -z-10" />
        </div>
    );
};

export default CreateReviewModal;
