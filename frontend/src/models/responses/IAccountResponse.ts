export default interface IAccountResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    occupation: string;
    description: string;
    avatar: string;
    roles: string[];
    createdAt: string;
    updatedAt: string;
}
