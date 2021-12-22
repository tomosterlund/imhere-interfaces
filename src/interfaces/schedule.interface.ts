import scheduleEvent from './schedule-event.interface'
import {scheduleOwner} from "../types";

export interface scheduleBelongsTo {
	ownerId: string;
	type: scheduleOwner;
}

export interface scheduleInterface {
	_id?: string;
	belongsTo?: scheduleBelongsTo;
	scheduleEvents?: scheduleEvent
}