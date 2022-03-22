/* eslint-disable linebreak-style */
import path from 'path';

const appdir = process.cwd();
// list of available images
const listOfImages = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

// Getting the path to where my images are stored
const storedImages = path.join(appdir, '/image-processing-api-starter/images/');
// console.log(storedImages);
// Path to store new resized images
const newImages = path.join(__dirname, '../images');
// console.log(newImages);

export default { storedImages, newImages, listOfImages };
