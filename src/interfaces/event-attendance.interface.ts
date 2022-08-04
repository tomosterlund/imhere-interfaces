export type attendanceStatusType = 'present' | 'absent' | 'excused' | 'pending';

export interface eventAttendanceInterface {
  _id: string;
  eventId: string;
  studentId: string;
  status: attendanceStatusType;
  lateMinutes?: number;
}