import Room from "../models/Room.js";

export const createRoom = async (req,res,next) => {
  try {
    const room = new Room({...req.body,propertyId:req.params.propertyId});
    await room.save();
    res.status(200).send(room)
  } catch (error) {
    next(error)
  }
}