import { HostDTO } from "./host-dto.model";
import { KindOfSchool } from "./kind-of-school.model";
import { SchoolType } from "./school-type.model";

export interface SchoolDTO {
    id: number;
    schoolName: string;
    shortcutName: string;
    createDate: Date;
    hostDTO: HostDTO
    address: string;
    postCode: string;
    city: string;
    country: string;
    schoolType: SchoolType;
    kindOfSchool: KindOfSchool;
  }