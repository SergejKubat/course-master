export default interface ICourseRequest {
    id?: number;
    categoryId: number;
    mentorId: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    price: number;
    isPublic: boolean;
}
