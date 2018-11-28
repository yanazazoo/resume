import { Request, Response } from "express";
import { ResumeController } from "../controllers/resumeController";


export class Routes {

    public resumeController: ResumeController = new ResumeController();    
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'No method for simple GET request'
            })
        })
         
        app.route('/resume') 
        .get(this.resumeController.getAllResume)       
        .post(this.resumeController.addNewResume)

        app.route('/resume/:resumeId')
        .get(this.resumeController.getResumeById)
        .put(this.resumeController.updateResume)
        .delete(this.resumeController.removeResume)
    }
}
