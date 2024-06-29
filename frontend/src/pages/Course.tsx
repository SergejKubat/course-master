import { useParams } from "react-router-dom";

const CoursePage = () => {
    const { courseId } = useParams();

    return (
        <section className="p-5">
            <h1 className="font-bold text-3xl text-center">Course Page</h1>
            <p className="text-center">Id: {courseId}</p>
        </section>
    );
};

export default CoursePage;
