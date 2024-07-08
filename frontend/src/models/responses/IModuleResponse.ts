import ILectureResponse from "./ILectureResponse";

export default interface IModuleResponse {
    id: number;
    title: string;
    description: string;
    lectures: ILectureResponse[];
    createdAt: string;
    updatedAt: string;
}
