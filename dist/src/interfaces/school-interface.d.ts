import { locationInterface } from "./location-interface";
export interface schoolInterface {
    _id?: string;
    name: string;
    ownerId?: string;
    locations?: locationInterface[];
}
