"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const Connection_1 = require("./DB/Connection");
const fishes_1 = __importDefault(require("./routes/fishes"));
const lures_1 = __importDefault(require("./routes/lures"));
function runserver() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, Connection_1.ConnectionDb)();
        const PORT = 5000;
        server.use(express_1.default.json());
        server.use("/fishes", fishes_1.default);
        server.use("/lures", lures_1.default);
        server.listen(PORT, () => {
            console.log("port ready on :", PORT);
        });
    });
}
runserver();
