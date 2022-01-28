import {SessionDTO} from "./sessionDTO.model";

export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  birthdate: Date;
  index: number;
  userGroup: string;
  session: SessionDTO;
}
