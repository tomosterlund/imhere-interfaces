import addressInterface from "./address.interface";
import {userRole} from "../types";

export default interface userInterface {
	_id?: string;
	email?: string;
	password?: string;
	name?: object;
	groups?: string[];
	mainGroup?: string;
	roles?: userRole[];
	address?: addressInterface;
	schoolId?: string;
	imageUrl?: string;
}