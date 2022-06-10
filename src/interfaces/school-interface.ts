import {locationInterface} from "./location-interface";
import {groupInterface} from "./group-interface";

export interface schoolInterface {
  _id?: string;
  name: string;
  ownerId?: string;
  locations?: locationInterface[];
  groups?: groupInterface[];
}