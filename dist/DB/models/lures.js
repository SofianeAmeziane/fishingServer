"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const lureSchema = new Schema({
    name: { type: String, required: true, maxlength: 128 },
    smallImg: { type: String, required: true, maxlength: 64 },
    fullImg: { type: String, required: true, maxlength: 128 },
    smallDescrition: { type: String, required: true },
    fullDescrition: { type: String, required: true },
    lures: { type: String, required: true },
}, { collection: 'lures' });
exports.default = mongoose_1.default.model('Lure', lureSchema);
