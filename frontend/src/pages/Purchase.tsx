import { useParams } from "react-router-dom";

const PurchasePage = () => {
    const { courseId } = useParams();

    return (
        <section className="p-5">
            <h1 className="font-bold text-3xl text-center">Purchase Page</h1>
            <p className="text-center">Id: {courseId}</p>
        </section>
    );
};

export default PurchasePage;
