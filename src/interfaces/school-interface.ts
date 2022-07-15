import {locationInterface} from "./location-interface";
import {groupInterface} from "./group-interface";
import {subjectInterface} from './subject.interface'

export interface schoolInterface {
  _id?: string;
  name: string;
  ownerId?: string;
  locations?: locationInterface[];
  groups?: groupInterface[];
  subjects?: subjectInterface[];
}