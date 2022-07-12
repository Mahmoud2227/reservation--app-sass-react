import Room from "../models/Room.js";
import Property from "../models/Property.js";

export const createRoom = async (req, res, next) => {
	try {
		const room = new Room({...req.body, propertyId: req.params.propertyId});
		await room.save();
		res.status(200).send(room);
	} catch (error) {
		next(error);
	}
};

export const getRoomsByProperty = async (req, res, next) => {
	try {
		const property = await Property.findById(req.params.propertyId);
		await property.populate({path: "rooms"});
		const rooms = property.rooms;
		res.status(200).send(rooms);
	} catch (error) {
		next(error);
	}
};

export const getRoomById = async (req,res,next) => {
  try {
    const room = await Room.findById(req.params.roomId)
    res.status(200).send(room);
  } catch (error) {
    next(error)
  }
}