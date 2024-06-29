import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const { categoryId } = useParams();

    return (
        <section className="p-5">
            <h1 className="font-bold text-3xl text-center">Category Page</h1>
            <p className="text-center">Id: {categoryId}</p>
        </section>
    );
};

export default CategoryPage;
