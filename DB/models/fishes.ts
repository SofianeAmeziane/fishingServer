import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  name: { type: String, required: true, maxlength: 128 },
  smallImg: { type: String, required: true, maxlength: 64},
  fullImg: { type: String, required: true, maxlength: 128},
  smallDescrition: { type: String, required: true },
  fullDescrition: { type: String, required: true },
  lures: { type: String, required: true },
  },
  { collection : 'fishes' })
export default mongoose.model('Fish', fishSchema);