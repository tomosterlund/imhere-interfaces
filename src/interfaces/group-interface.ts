import {scheduleEventInterface} from "./schedule-event.interface";

export interface groupInterface {
	_id?: string;
	name: string;
	teacherIds: string[];
	scheduleEvents?: scheduleEventInterface[];
	imageUrl?: string;
}