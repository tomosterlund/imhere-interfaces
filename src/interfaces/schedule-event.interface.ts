export interface scheduleEventTimeInterface {
  start: string;
  end: string;
}

export interface scheduleEventInterface {
  _id?: string;
  title: string;
  description?: string;
  subjectId?: string;
  teacherIds?: string[];
  locationId?: string;
  schoolId?: string;
  time?: scheduleEventTimeInterface;
  insertIntoSchedule?: string; // Only for the POST requests, should not be saved in document
  color?: string;
  cloneOfId?: string;
}