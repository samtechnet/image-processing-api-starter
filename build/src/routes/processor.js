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
// import { promises as fspromise } from "fs";
const path_1 = __importDefault(require("path"));
const strilizer_1 = __importDefault(require("./strilizer"));
const filepath_1 = __importDefault(require("./filepath"));
const cache_1 = __importDefault(require("./cache"));
const appdir = process.cwd();
const processor = express_1.default.Router();
//@eslint
// function ConvertToNumber (arg:string|number):number {
//     co nst  value = ((arg as unknown) as number);
//     return value;
// }
processor.get("/", strilizer_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('index', { title: 'Home' });
        console.log(req.query);
        const imageName = req.query.imageName;
        let width = parseInt(req.query.width);
        let height = parseInt(req.query.height);
        const img = req.query.img;
        // console.log(req.query);
        console.log(width, height, img);
        console.log(width, height, img);
        // Get file path
        const filename = path_1.default.join(__dirname, "../images");
        //console.log(filename + fjord.jpeg)
        //Resize the Image
        const storedImages = `${filepath_1.default.storedImages}/${imageName}.jpeg`;
        const newImages = `${filepath_1.default.newImages}/${imageName}_${width}_${height}.jpeg`;
        if (filepath_1.default.listOfImages.indexOf(imageName) === -1) {
            return res.send({
                message: "image file doesn't exist of the list. please choose from the list [encenadaport,fjord,icelandwaterfall, palmtunnel,santamonica] ",
                status: 400
            });
        }
        yield (0, cache_1.default)(width, height, imageName);
        //res.send('success')
    }
    catch (e) {
        console.log(e);
    }
}));
exports.default = processor;
