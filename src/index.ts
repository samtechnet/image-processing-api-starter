import { Router } from "express";
import processor from "./routes/processor";
const routes = Router();

routes.use("/processor", processor);



export default routes;