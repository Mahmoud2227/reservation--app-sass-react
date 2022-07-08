import Property from "../models/Property.js";
import User from "../models/User.js";

export const createProperty = async (req, res, next) => {
	try {
		const property = new Property({...req.body, owner: req.params.ownerId});
		await property.save();
		res.status(200).send(property);
	} catch (error) {
		next(error);
	}
};

export const getPropertyListByUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.ownerId)
    await user.populate({path:"property"})
    const propertyList = user.property
    res.status(200).send(propertyList)
  } catch (error) {
    next(error)
  }
};
