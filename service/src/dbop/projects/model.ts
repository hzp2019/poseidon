import * as mongoose from 'mongoose';

let propSchema = new mongoose.Schema({
	name:String,
	date: { type: Date, default: Date.now },
	uid: mongoose.Schema.Types.ObjectId,
	version:String
});

export function getModel(modelName:any){
	return mongoose.model(modelName, propSchema, modelName);
}