import { useState, useEffect } from "react";

import { useAuth } from "../../contexts/AuthContext";

import ReviewCard from "../card/ReviewCard";
import CreateReviewModal from "../modal/CreateReviewModal";
import Button from "../form/Button";

import IReviewResponse from "../../models/responses/IReviewResponse";

interface IReviewContainerProps {
    courseId: number;
    isPurchased: boolean;
}

const ReviewContainer = (props: IReviewContainerProps) => {
    const [reviews, setReviews] = useState<IReviewResponse[]>([]);
    const [modalShown, setModalShown] = useState<boolean>(false);

    const { account } = useAuth();

    const getReviews = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${props.courseId}/reviews`, { method: "GET" });

        const data = await response.json();

        if (response.ok) {
            setReviews(data);
        }
    };

    const addReview = (review: IReviewResponse) => {
        setReviews([...reviews, review]);
    };

    const removeReview = (reviewId: number) => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
    };

    const checkAccountReview = (): boolean => {
        for (let i = 0; i < reviews.length; i++) {
            if (account!.id === reviews[i].student.id) return true;
        }

        return false;
    };

    useEffect(() => {
        getReviews().then();
    }, [props.courseId]);

    return (
        <div className="w-full">
            {account && props.isPurchased && !checkAccountReview() ? (
                <Button
                    className="block ml-auto mb-5 px-6 text-[16px] text-white bg-green-600 enabled:hover:bg-green-700"
                    onClick={() => setModalShown(true)}
                >
                    Add Review
                </Button>
            ) : null}
            {reviews.length > 0 ? (
                <>
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} removeReview={removeReview} />
                    ))}
                </>
            ) : (
                <p className="text-center">No reviews.</p>
            )}
            {modalShown ? <CreateReviewModal courseId={props.courseId} setShowModal={setModalShown} addReview={addReview} /> : null}
        </div>
    );
};

export default ReviewContainer;
