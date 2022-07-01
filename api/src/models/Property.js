import {Schema} from "mongoose";

const PropertySchema = new Schema(
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
		title: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			min: 0,
			max: 5,
		},
		rooms: {
			type: [String],
		},
		cheapestPrice: {
			type: Number,
			required: true,
		},
		featured: {
			type: Boolean,
			default: false,
		},
	},
	{collection: "properties"}
);

const Property = mongoose.model("Property", PropertySchema);

export default Property;