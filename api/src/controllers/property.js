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

export const updateProperty = async (req,res,next)=>{
	try {
		const property = await Property.findByIdAndUpdate(req.params.propertyId, {$set:req.body},{new:true} );
		res.status(200).send(property);
	} catch (error) {
		next(error)
	}
}

export const deleteProperty = async(req, res,next)=>{
	try {
		const property = await Property.findByIdAndDelete(req.params.propertyId)
		res.status(200).send(property);
	} catch (error) {
		next(error)
	}
};

export const getFeaturedCities = async (req, res, next) => {
	try {
		const property = await Property.find({});
		const cities = property.map((el) => el.city.toLowerCase());
		const citesCount = [...new Set(cities)].map(city => {
			const count = property.filter(el => el.city.toLowerCase() === city).length
			return ({city,count})
		})
		const featuredCites = citesCount.sort((a,b)=> b.count-a.count)
		res.send(featuredCites.slice(0,3))
	} catch (error) {
		next(error);
	}
};