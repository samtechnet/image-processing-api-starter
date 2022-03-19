import express from 'express';
import routes from './src/index'
import redis from 'redis';
import cors from 'cors';
import expressLayouts from 'express-ejs-layouts';
import { RequestHandler } from 'express';
import path from 'path';




const appdir = process.cwd();
const app = express();
const PORT = 3002;




app.use("/apis", routes);
app.use(cors());
app.use(expressLayouts);
app.set('views', path.join(appdir, '/src/views'));
//app.set('assets', path.join(appdir, '/assets'))


app.set('view engine', 'ejs');
// static files 
app.use(express.static('assets'))
app.use('/css', express.static(__dirname + '/assets/css/style.css'));
app.use('/js', express.static(__dirname + '/assets/js/app.js'))

app.get('/', (req, res) => {
    res.render('about');
   
   // return res.send("server is running");
    //console.log("testing ");
    
     //res.json(req.query)
 })



app.listen(PORT, () => console.log(`server started on port ${PORT}`));

export default app;