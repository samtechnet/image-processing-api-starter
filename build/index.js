"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
const cors_1 = __importDefault(require("cors"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const path_1 = __importDefault(require("path"));
const appdir = process.cwd();
const app = (0, express_1.default)();
const PORT = 3002;
app.use("/apis", index_1.default);
app.use((0, cors_1.default)());
app.use(express_ejs_layouts_1.default);
app.set('views', path_1.default.join(appdir, '/src/views'));
//app.set('assets', path.join(appdir, '/assets'))
app.set('view engine', 'ejs');
// static files 
app.use(express_1.default.static('assets'));
app.use('/css', express_1.default.static(__dirname + '/assets/css/style.css'));
app.use('/js', express_1.default.static(__dirname + '/assets/js/app.js'));
app.get('/', (req, res) => {
    res.render('about');
    // return res.send("server is running");
    //console.log("testing ");
    //res.json(req.query)
});
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
exports.default = app;
