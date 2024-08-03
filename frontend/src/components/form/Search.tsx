import { Dispatch, SetStateAction } from "react";

import { FaSearch } from "react-icons/fa";

import Input from "./Input";

interface ISearchProps {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

const Search = (props: ISearchProps) => {
    return (
        <div className="flex justify-center mt-10">
            <label className="relative">
                <FaSearch className="w-[18px] h-[18px] absolute top-1/2 left-3 transform -translate-y-1/2" />
                <Input
                    placeholder="Search..."
                    value={props.query}
                    className="w-[300px] pl-10 text-[18px] rounded-lg xs:w-[350px] xl:w-[376px]"
                    onChange={props.setQuery}
                />
            </label>
        </div>
    );
};

export default Search;
