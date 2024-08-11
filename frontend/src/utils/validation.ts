import validator from "validator";

export const validatePassword = (password: string): boolean => {
    return validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 0
    });
};

export const validateStrongPassword = (password: string): boolean => {
    return validator.isStrongPassword(password, {
        minLength: 12,
        minUppercase: 2,
        minLowercase: 2,
        minNumbers: 2,
        minSymbols: 2
    });
};

interface IValidateFileParams {
    SUPPORTED_MIME_TYPES: string[];
    SUPPORTED_EXTENSIONS: string[];
    MAX_FILE_SIZE: number;
}

interface IValidateFileOutput {
    success: boolean;
    message: string;
}

export const validateFile = (file: File, params: IValidateFileParams): IValidateFileOutput => {
    const output: IValidateFileOutput = {
        success: true,
        message: ""
    };

    if (!file) {
        output.success = false;
        output.message = "File is not provided.";
    }

    if (!params.SUPPORTED_MIME_TYPES.includes(file.type)) {
        output.success = false;
        output.message = `You must provide supported file extensions: ${params.SUPPORTED_EXTENSIONS.join(", ")}`;
    }

    if (file.size > params.MAX_FILE_SIZE) {
        output.success = false;
        output.message = `Your file size is over ${params.MAX_FILE_SIZE / 1024 / 1024} MB.`;
    }

    return output;
};
