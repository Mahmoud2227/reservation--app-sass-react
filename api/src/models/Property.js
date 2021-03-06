import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		distance: {
			type: String,
			required: true,
		},
		images: {
			type: [String],
		},
		description: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			min: 0,
			max: 5,
		},
		cheapestPrice: {
			type: Number,
			required: true,
		},
		featured: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User"
		}
	},
);

PropertySchema.virtual("rooms",{
	ref:"Room",
	localField:"_id",
	foreignField:"propertyId"
})

const Property = mongoose.model("Property", PropertySchema);

export default Property;
