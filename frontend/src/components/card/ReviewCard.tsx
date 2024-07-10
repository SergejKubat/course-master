import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { enqueueSnackbar } from "notistack";
import { FaTrash } from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";

import { formatDate } from "../../utils/date";

import IReviewResponse from "../../models/responses/IReviewResponse";

interface IReviewCardProps {
    review: IReviewResponse;
    removeReview: (reviewId: number) => void;
}

const ReviewCard = (props: IReviewCardProps) => {
    const { account, authFetch } = useAuth();

    const deleteReview = async () => {
        const response = await authFetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/${props.review.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            props.removeReview(props.review.id);

            enqueueSnackbar("Reviews is successfully deleted.", { variant: "success" });
        } else {
            enqueueSnackbar("Error.", { variant: "error" });
        }
    };

    return (
        <div className="relative w-full my-2 py-2 px-3 border border-gray-500 rounded-2xl">
            {account?.id === props.review.student.id ? (
                <FaTrash
                    className="absolute top-4 right-3 text-[20px] text-red-500 cursor-pointer hover:text-red-600"
                    onClick={deleteReview}
                />
            ) : null}
            <div className="flex items-center gap-3">
                <Link to={`/accounts/${props.review.student.id}`}>
                    <img
                        src={props.review.student.avatar}
                        alt={`${props.review.student.firstName} ${props.review.student.lastName}`}
                        width={40}
                        height={40}
                        className="rounded"
                    />
                </Link>
                <div>
                    <h3 className="font-semibold">
                        {props.review.student.firstName} {props.review.student.lastName}
                    </h3>
                    <p className="text-xs text-gray-500">{formatDate(props.review.createdAt)}</p>
                </div>
            </div>
            <div className="flex my-2">
                <Rating iconsCount={5} initialValue={props.review.rating} readonly allowFraction size={24} SVGclassName="inline-block" />
            </div>
            <p className="mb-2 text-[14px]">{props.review.comment}</p>
        </div>
    );
};

export default ReviewCard;
