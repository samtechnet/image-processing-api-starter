import express from 'express';
import routes from './src/index'

const app = express();
const PORT = 3000;

app.use("/apis", routes)

app.get('/', (req, res) => {
    res.send(req.query);
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

export default app;