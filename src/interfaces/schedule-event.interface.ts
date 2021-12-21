export interface timeInterface {
	start: number;
	end: number;
	startPrint: number;
	endPrint: number;
}

export interface locationInterface {
	_id: string;
	name: string;
}

export interface teacherInterface {
	_id: string;
	name: string;
}

export default interface scheduleEventInterface {
	_id: string;
	title: string;
	teachers: teacherInterface[];
	time: timeInterface
	location: locationInterface;
}