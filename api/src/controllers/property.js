import Property from "../models/Property.js";

export const createProperty = async (req, res, next) => {
  try {
    const property = new Property({...req.body,owner:req.params.ownerId})
    await property.save();
    res.status(200).send(property)
  } catch (error) {
    next(error)
  }
};
