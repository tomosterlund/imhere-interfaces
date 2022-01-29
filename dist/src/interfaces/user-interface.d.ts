import { userRole } from "../types";
export interface personNameInterface {
    first: string;
    last: string;
}
export interface userInterface {
    _id?: string;
    username: string;
    password: string;
    roles: userRole[];
    name: personNameInterface;
    schoolId: string;
    scheduleId?: string;
}
