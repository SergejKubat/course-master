import IFileUploadResponse from "../models/responses/IFileUploadResponse";

export const uploadFile = async (file: File, token: string): Promise<string> => {
    const data = new FormData();

    data.append("file", file);

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/files/upload`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: "POST",
        body: data
    });

    const responseData = (await response.json()) as IFileUploadResponse;

    return responseData.url;
};
