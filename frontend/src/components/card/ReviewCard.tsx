import { Rating } from "react-simple-star-rating";

import IReviewResponse from "../../models/responses/IReviewResponse";

interface IReviewCardProps {
    review: IReviewResponse;
}

const ReviewCard = (props: IReviewCardProps) => {
    return (
        <div className="w-full my-2 p-2 border border-gray-500 rounded-2xl">
            <div className="flex items-center gap-3">
                <img src="https://robohash.org/GIH.png" alt="John Doe" width={40} height={40} className="rounded" />
                <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-xs text-gray-500">{props.review.createdAt}</p>
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
