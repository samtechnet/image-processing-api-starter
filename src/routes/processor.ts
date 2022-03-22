/* eslint-disable linebreak-style */
/* eslint-disable indent */
import sharp from 'sharp';
import express from 'express';
// import { promises as fspromise } from "fs";
import path from 'path';
import sterilizer from './strilizer';
import filepath from './filepath';
import cache from './cache';

const appdir = process.cwd();
const processor = express.Router();
// @eslint
// function ConvertToNumber (arg:string|number):number {
//     co nst  value = ((arg as unknown) as number);
//     return value;
// }

processor.get('/', sterilizer, async (req, res) => {
    try {
        res.render('index', { title: 'Home' });

         const imageName = req.query.imageName as string;
         const width = parseInt(req.query.width as string, 10);
        const height = parseInt(req.query.height as string, 10);
        const { img } = req.query;
        // console.log(req.query);
         console.log(width, height, img);

        // Get file path

      //  const filename = path.join(__dirname, '../images');
        // console.log(filename + fjord.jpeg)
        // Resize the Image
        // const storedImages = `${filepath.storedImages}/${imageName}.jpeg`;
        // const newImages = `${filepath.newImages}/${imageName}_${width}_${height}.jpeg`;
        if (filepath.listOfImages.indexOf(imageName) === -1) {
           return res.send(
                {
                    message: "image file doesn't exist of the list. please choose from the list [encenadaport,fjord,icelandwaterfall, palmtunnel,santamonica] ",
                    status: 400,
                },
      );
    }

        await cache(width, height, imageName);

        // res.send('success')
    } catch (e) {
        console.log(e);
    }
});

export default processor;
