import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/resumeRoutes";

class App {

    public app: express.Application;

    public routeProvider: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();      
        this.routeProvider.routes(this.app);  
    }

    private config(): void{
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
