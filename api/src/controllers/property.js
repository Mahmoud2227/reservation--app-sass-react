import Property from "../models/Property.js";
import User from "../models/User.js";

export const createProperty = async (req, res, next) => {
	try {
		const property = new Property({...req.body, owner: req.params.id});
		await property.save();
		res.status(200).send(property);
	} catch (error) {
		next(error);
	}
};

export const getPropertyListByUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		await user.populate({path: "property"});
		const propertyList = user.property;
		res.status(200).send(propertyList);
	} catch (error) {
		next(error);
	}
};

export const getPropertyList = async (req, res, next) => {
	try {
		const propertyList = await Property.find({});
		res.status(200).send(propertyList);
	} catch (error) {
		next(error);
	}
};

export const getPropertyById = async (req,res,next) => {
  try {
    const property = await Property.findOne({_id:req.params.propertyId,owner:req.params.id})
    res.status(200).send(property);
  } catch (error) {
    next(error)
  }
}
