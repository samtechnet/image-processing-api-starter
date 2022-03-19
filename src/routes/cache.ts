import fs from 'fs';
import filepath from './filepath';
import sharp from 'sharp';


const cache =async (width: number, height: number, imageName: string): Promise<string | undefined> => {
    try {
        // checking if image already exist 
        const storedImages = `${filepath.storedImages}/${imageName}.jpeg`;
        const newImages = `${filepath.newImages}/${imageName}_${width}_${height}.jpeg`
        if (
            fs.existsSync(newImages)
        ) {
            return newImages
            
        }
        if (
            await sharp(storedImages ).resize(width, height).jpeg().toFile(newImages)){
           // console.log(newImages)
      
            return newImages
        };
        
        
    } catch (error) {
        throw new Error(`can't find image ${error}`)
    }
}

export default cache