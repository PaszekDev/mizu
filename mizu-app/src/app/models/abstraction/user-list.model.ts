import { UserDTO } from "../user-dto.model";

export interface UserListDTO<T> {
    totalCount: number;
    content: T[];
}