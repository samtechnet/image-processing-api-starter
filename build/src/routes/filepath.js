"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const appdir = process.cwd();
// list of available images 
const listOfImages = [
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica'
];
// Getting the path to where my images are stored 
const storedImages = path_1.default.join(appdir, '/image-processing-api-starter/images/');
//console.log(storedImages);
// Path to store new resized images 
const newImages = path_1.default.join(__dirname, '../images');
//console.log(newImages);
exports.default = { storedImages, newImages, listOfImages };
