import {userRole} from "../types";
import {scheduleEventInterface} from "./schedule-event.interface";

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
  scheduleEvents?: scheduleEventInterface[];
  groupId?: string;
  imageUrl?: string;
}