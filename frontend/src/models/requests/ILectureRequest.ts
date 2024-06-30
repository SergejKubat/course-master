export default interface ILectureRequest {
    id?: number;
    moduleId: number;
    title: string;
    description: string;
    attachmentUrl: string;
    isPublic: boolean;
}
