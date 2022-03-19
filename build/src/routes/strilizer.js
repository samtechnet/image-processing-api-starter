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
Object.defineProperty(exports, "__esModule", { value: true });
// let width: number
// let height: number
// let imageName: string
//@eslint
const sterilizer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let width = req.query.width;
        let height = req.query.height;
        let imageName = req.query.imageName;
        if (typeof width != "number" ||
            typeof height != "number")
            typeof imageName != "string";
        //console.log(typeof height)
        {
            Number(width);
            Number(height);
            //return res.send('correct parameter')
        }
        ;
        if (width === undefined ||
            height === undefined)
            return res.send('incomplet parameter');
        else
            next();
    }
    catch (error) {
        return res.status(500).send(error);
    }
    ;
});
// Cg @6Zd * 3
// 2010.Sam@Sam
exports.default = sterilizer;
