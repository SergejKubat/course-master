import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import { formatDate } from "../../utils/date";

import IReviewResponse from "../../models/responses/IReviewResponse";

interface IReviewCardProps {
    review: IReviewResponse;
}

const ReviewCard = (props: IReviewCardProps) => {
    return (
        <div className="w-full my-2 py-2 px-3 border border-gray-500 rounded-2xl">
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
