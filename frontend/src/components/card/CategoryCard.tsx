import { Link } from "react-router-dom";

import Button from "../form/Button";

import ICategoriesResponse from "../../models/responses/ICategoriesResponse";

interface ICategoryCardProps {
    category: ICategoriesResponse;
}

const CategoryCard = (props: ICategoryCardProps) => {
    return (
        <div className="w-80 border border-gray-600 rounded-2xl">
            <div className="relative">
                <img src={props.category.thumbnailUrl} alt={props.category.name} width={320} height={240} className="rounded-t-2xl" />
                <div className="absolute bottom-0 left-0 w-[320px] py-2 px-4 bg-black bg-opacity-50">
                    <h3 className="font-semibold text-[18px] text-white">{props.category.name}</h3>
                </div>
            </div>
            <div className="py-3 px-4 rounded-2xl">
                <p className="text-[14px] text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minus!</p>
                <div className="flex justify-end mt-3">
                    <Link to={`/categories/${props.category.id}`}>
                        <Button className="py-2 px-4 font-medium text-sm text-center text-white bg-blue-500 rounded-2xl hover:bg-blue-600">
                            Details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
