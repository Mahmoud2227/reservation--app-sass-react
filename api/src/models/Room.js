import mongoose from "mongoose"

const roomSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		maxPeople: {
			type: Number,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}],
    propertyId : {
      type:mongoose.Schema.Types.ObjectId,
      required:true,
			ref:"Property"
    }
	},
	{timestamps: true}
);

const Room = mongoose.model("Room",roomSchema)

export default Room