import Room from "../models/Room.js";
import Property from "../models/Property.js"

export const createRoom = async (req,res,next) => {
  try {
    const room = new Room(req.body);
    await room.save();
    await Property.findByIdAndUpdate(req.params.propertyId,{$push:{rooms:room._id}})
    res.status(200).send(room)
  } catch (error) {
    next(error)
  }
}