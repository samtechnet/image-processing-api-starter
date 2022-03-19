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
const fs_1 = __importDefault(require("fs"));
const filepath_1 = __importDefault(require("./filepath"));
const sharp_1 = __importDefault(require("sharp"));
const cache = (width, height, imageName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // checking if image already exist 
        const storedImages = `${filepath_1.default.storedImages}/${imageName}.jpeg`;
        const newImages = `${filepath_1.default.newImages}/${imageName}_${width}_${height}.jpeg`;
        if (fs_1.default.existsSync(newImages)) {
            return newImages;
        }
        if (yield (0, sharp_1.default)(storedImages).resize(width, height).jpeg().toFile(newImages)) {
            // console.log(newImages)
            // res.send({
            //     status: 200,
            //     message: "success"
            return newImages;
        }
        ;
        // if (
        //     fs.existsSync
        // )
    }
    catch (error) {
        throw new Error(`can't find image ${error}`);
    }
});
exports.default = cache;
