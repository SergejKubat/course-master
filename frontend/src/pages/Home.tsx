import CategoryCard from "../components/card/CategoryCard";

import ICategoriesResponse from "../models/responses/ICategoriesResponse";

import Logo from "../assets/logo.png";

const category: ICategoriesResponse = {
    id: 1,
    name: "Web Development",
    thumbnailUrl: "https://picsum.photos/320/240"
};

const HomePage = () => {
    return (
        <section className="flex flex-col items-center gap-y-10 p-5">
            <div className="flex flex-col items-center gap-y-5 w-[640px]">
                <img src={Logo} alt="CourseMaster Logo" width={128} height={128} />
                <h1 className="font-bold text-[36px]">
                    Welcome to{" "}
                    <span className="italic">
                        Course<span className="text-blue-300">Master</span>
                    </span>
                </h1>
                <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae pulvinar magna. Suspendisse orci sapien,
                    scelerisque vel metus vel, laoreet viverra elit. Nulla gravida sapien eget magna consectetur, a consequat diam congue.
                    Cras gravida consequat ante, ac mollis nisl elementum ut.
                </p>
            </div>

            <div>
                <h2 className="mb-5 text-[28px] text-center">Categories</h2>
                <div className="flex flex-wrap justify-center gap-5">
                    <CategoryCard category={category} />
                    <CategoryCard category={category} />
                    <CategoryCard category={category} />
                    <CategoryCard category={category} />
                    <CategoryCard category={category} />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
