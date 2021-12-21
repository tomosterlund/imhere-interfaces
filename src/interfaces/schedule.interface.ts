import scheduleEvent from './schedule-event.interface'

export type scheduleOwnerType = 'teacher' | 'student' | 'class' | 'school' | 'location';

export interface scheduleBelongsTo {
	ownerId: string;
	type: scheduleOwnerType;
}

export interface scheduleInterface {
	_id?: string;
	belongsTo?: scheduleBelongsTo;
	scheduleEvents?: scheduleEvent
}