/* eslint-disable linebreak-style */
import fs from 'fs';
import sharp from 'sharp';
// eslint-disable-next-line consistent-return

import filepath from './filepath';

const cache = async (
  width: number,
  height: number,
  // eslint-disable-next-line consistent-return
  imageName: string,
)
  // eslint-disable-next-line consistent-return
  : Promise<string | undefined> => {
  try {
    // checking if image already exist
    const storedImages = `${filepath.storedImages}/${imageName}.jpeg`;
    const newImages = `${filepath.newImages}/${imageName}_${width}_${height}.jpeg`;
    if (
      fs.existsSync(newImages)
    ) {
      return newImages;
    }
    if (
      await sharp(storedImages).resize(width, height).jpeg().toFile(newImages)) {
      // console.log(newImages)

      return newImages;
    }
  } catch (error) {
    throw new Error(`can't find image ${error}`);
  }
};

export default cache;
