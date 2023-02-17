import {config} from '../config/dev';
import mongoose, { ConnectOptions } from 'mongoose'
require('./models/fishes');
require('./models/lures');
export const ConnectionDb = async () =>{
mongoose.set("strictQuery", false);
mongoose.connect(config.DB_URI)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))
}