import { useParams } from "react-router-dom";

const UpdateCoursePage = () => {
    const { categoryId } = useParams();

    console.log(categoryId);

    return (
        <section className="p-5">
            <h1>Update Course</h1>
        </section>
    );
};

export default UpdateCoursePage;
