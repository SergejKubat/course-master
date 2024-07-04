import { useState } from "react";

import MDEditor from "@uiw/react-md-editor";

import Input from "../../components/form/Input";
import ImageUpload from "../../components/form/ImageUpload";
import Checkbox from "../../components/form/Checkbox";
import Button from "../../components/form/Button";

import ICategoriesResponse from "../../models/responses/ICategoriesResponse";

const availableCategories: ICategoriesResponse[] = [
    {
        id: 1,
        name: "Category 1",
        thumbnailUrl: ""
    },
    {
        id: 2,
        name: "Category 2",
        thumbnailUrl: ""
    },
    {
        id: 3,
        name: "Category 3",
        thumbnailUrl: ""
    },
    {
        id: 4,
        name: "Category 4",
        thumbnailUrl: ""
    }
];

const CreateCoursePage = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>();
    const [thumbnail, setThumbnail] = useState<string | File>("");
    const [videoUrl, setVideoUrl] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(-1);
    const [loading, setLoading] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    return (
        <section className="flex flex-col max-w-[1200px] mx-auto">
            <h1 className="mt-3 font-bold text-[30px] text-center">Create Course</h1>
            <div className="flex justify-between gap-x-10 w-full">
                <div>
                    <label htmlFor="titleInput" className="block mb-2 font-medium text-sm">
                        Title
                    </label>
                    <Input
                        id="titleInput"
                        placeholder="Enter title"
                        touched={touched}
                        value={title}
                        errorMessage="Title is not valid."
                        className="w-[375px]"
                        validation={(value) => value.length >= 3}
                        onChange={setTitle}
                    />

                    <label htmlFor="selectedCategory" className="block mt-4 mb-2 font-medium text-sm">
                        Category
                    </label>
                    <select
                        id="selectedCategory"
                        value={selectedCategoryId}
                        defaultValue={-1}
                        className="w-[375px] p-3 text-[14px] text-white bg-gray-800 border border-gray-600 outline-none rounded-lg"
                        onChange={(e) => setSelectedCategoryId(parseInt(e.target.value))}
                    >
                        <option value={-1} disabled>
                            Select category
                        </option>
                        {availableCategories.map((option, index) => (
                            <option key={index} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="priceInput" className="block mt-5 mb-2 font-medium text-sm">
                        Price ($)
                    </label>
                    <Input
                        id="priceInput"
                        type="number"
                        placeholder="Enter price"
                        touched={touched}
                        value={price}
                        errorMessage="Price is not valid."
                        className="w-[375px]"
                        validation={(value) => parseInt(value) > 0}
                        onChange={setPrice}
                    />
                </div>
                <div>
                    <ImageUpload
                        title="Thumbnail"
                        width={320}
                        height={240}
                        image={thumbnail}
                        setImage={setThumbnail}
                        className="w-[375px] h-[280px]"
                    />

                    <label htmlFor="videoUrlInput" className="block mt-10 mb-2 font-medium text-sm">
                        Video Url
                    </label>
                    <Input
                        id="videoUrlInput"
                        placeholder="Enter video url"
                        touched={touched}
                        value={videoUrl}
                        errorMessage="Video url is not valid."
                        className="w-[375px]"
                        validation={(value) => value.length >= 3}
                        onChange={setVideoUrl}
                    />
                </div>
            </div>

            <div className="container mt-1" data-color-mode="dark">
                <label htmlFor="description" className="block mt-4 mb-2 font-medium text-sm">
                    Description
                </label>
                <MDEditor id="description" value={description} onChange={setDescription} />
            </div>

            <div className="mt-5">
                <Checkbox id="publicInput" checked={isPublic} handleChange={() => setIsPublic(!isPublic)} />
                <label htmlFor="publicInput" className="ms-2 font-medium text-sm text-gray-300">
                    Public
                </label>
            </div>

            <div className="flex justify-end mt-5">
                <Button className="px-6 text-[16px] text-white bg-green-600 enabled:hover:bg-green-700">Create Course</Button>
            </div>
        </section>
    );
};

export default CreateCoursePage;
