import { useState, useRef, ChangeEvent, Dispatch, SetStateAction } from "react";

import { enqueueSnackbar } from "notistack";

import { BsImageFill } from "react-icons/bs";

import { validateFile } from "../../utils/validation";

import { MAX_FILE_SIZE, IMAGE_SUPPORTED_MIME_TYPES, IMAGE_SUPPORTED_EXTENSIONS } from "../../constants";

interface ImageUploadProps {
    title: string;
    width: number;
    height: number;
    image: string | File;
    setImage: Dispatch<SetStateAction<string | File>>;
    className?: string;
}

const ImageUpload = (props: ImageUploadProps) => {
    const [imagePreview, setImagePreviuew] = useState<string>(typeof props.image === "string" ? props.image : "");

    const filePicker = useRef<HTMLInputElement>(null);

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const file = e.target.files[0];

        const validationOutput = validateFile(file, {
            SUPPORTED_MIME_TYPES: IMAGE_SUPPORTED_MIME_TYPES,
            SUPPORTED_EXTENSIONS: IMAGE_SUPPORTED_EXTENSIONS,
            MAX_FILE_SIZE
        });

        if (!validationOutput.success) {
            enqueueSnackbar(validationOutput.message, { variant: "error" });
            return;
        }

        props.setImage(file);

        // preview image
        const fileReader = new FileReader();

        fileReader.addEventListener("load", (e) => {
            const url = e.target?.result;

            // @ts-ignore
            setImagePreviuew(url);
        });

        fileReader.readAsDataURL(file);

        // clear input field
        e.target.value = "";
    };

    const onFileInputClick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        }
    };

    return (
        <div className={props.className}>
            <label className="block mb-2 font-medium text-sm">{props.title}</label>
            <input type="file" accept={IMAGE_SUPPORTED_EXTENSIONS.join(", ")} ref={filePicker} className="hidden" onChange={onFileChange} />
            {imagePreview ? (
                <div className="flex flex-col items-center">
                    <img src={imagePreview} alt="Upload Image" width={props.width} height={props.height} />
                    <p className="mt-2.5 mb-0 text-sm text-center text-gray-600 cursor-pointer" onClick={onFileInputClick}>
                        Upload Other Image
                    </p>
                </div>
            ) : (
                <div
                    className="flex flex-col justify-center items-center w-full h-full p-5 border border-dashed border-gray-500 cursor-pointer"
                    onClick={onFileInputClick}
                >
                    <BsImageFill className="w-10 h-10" />
                    <p className="mt-3">
                        Maximum size is {MAX_FILE_SIZE / 1024 / 1024} MB ({IMAGE_SUPPORTED_EXTENSIONS.join(", ")})
                    </p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
