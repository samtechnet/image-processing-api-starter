import sharp from 'sharp';
import express from 'express';

const processor = express.Router();

function ConvertToNumber (arg:string|number):number {
    const value = ((arg as unknown) as number);
    return value;
}


processor.get("/", async (req, res) => {
    res.send("test ")
})

export default processor;