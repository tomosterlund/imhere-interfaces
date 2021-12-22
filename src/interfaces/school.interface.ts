import addressInterface from "./address.interface";

export default interface schoolInterface {
	name?: string;
	imageUrl?: string;
	ownerId?: string;
	admins?: string[];
	address?: addressInterface;
}