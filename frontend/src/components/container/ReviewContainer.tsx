import { useState } from "react";

import ReviewCard from "../card/ReviewCard";
import CreateReviewModal from "../modal/CreateReviewModal";
import Button from "../form/Button";

import IReviewResponse from "../../models/responses/IReviewResponse";

interface IReviewContainerProps {
    reviews: IReviewResponse[];
}

const ReviewContainer = (props: IReviewContainerProps) => {
    const [modalShown, setModalShown] = useState<boolean>(false);

    return (
        <div className="w-full">
            <Button
                className="block ml-auto mb-5 px-6 text-[16px] text-white bg-green-600 enabled:hover:bg-green-700"
                onClick={() => setModalShown(true)}
            >
                Add Review
            </Button>
            {props.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
            {modalShown ? <CreateReviewModal courseId={1} setShowModal={setModalShown} /> : null}
        </div>
    );
};

export default ReviewContainer;
