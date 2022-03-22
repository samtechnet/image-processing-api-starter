import express from 'express';

// @eslint

const sterilizer = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { width } = req.query;
    const { height } = req.query;
    const { imageName } = req.query;

    if (
      typeof width !== 'number'
            || typeof height !== 'number') { typeof imageName !== 'string'; }
    {
      Number: numberConstructor(width);
      Number(height);
      // return res.send('correct parameter')
    }

    if (
      width === undefined || height === undefined
    ) { return res.send('incomplet parameter'); }
    next();
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default sterilizer;
