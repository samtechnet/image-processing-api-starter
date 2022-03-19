import  express  from "express";





//@eslint

const sterilizer =  async  (req: express.Request, res: express.Response, next: express.NextFunction,) => {
    try {
        
        let width = req.query.width;
        let height = req.query.height;
        let imageName = req.query.imageName;
        
        if (
            typeof width != "number" ||
            typeof height != "number")
            typeof imageName != "string"
    
        {
            Number(width);
            Number(height)
           //return res.send('correct parameter')
        };

        if (
            width === undefined ||
            height === undefined
        )
           return res.send('incomplet parameter')
        else next();
    } catch (error) {
       return res.status(500).send(error)
    
    };
}
    



    export default sterilizer ;