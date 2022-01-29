import * as mongoose from "mongoose";
export interface scheduleInterface {
    _id?: string | mongoose.Types.ObjectId;
    events: object[];
    follows?: string[];
    schoolId?: string;
}
