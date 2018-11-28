import * as fs from 'fs';
import * as path from 'path';
import { Request, Response } from 'express';

const ResumeDirectory = path.join(__dirname, "../../data");

export class ResumeController {

    public getAllResume(req: Request, res: Response) {
        fs.readdir(ResumeDirectory, (error, files) => {
            if(error) {
                res.send(error);
            }
            let resumeNames: string[] = [];
            for (let file of files) {
                resumeNames.push(path.basename(file, ".json"));
            }
            res.status(200).send(resumeNames);
        })
    }

    public addNewResume(req: Request, res: Response) {   
        const resumeId: string = req.body.resumeId;
        fs.writeFile(path.join(ResumeDirectory, `${resumeId}.json`), 'utf8', (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`New resume ${resumeId} was created.`)
        });
    }

    public getResumeById(req: Request, res: Response) { 
        const resumeId: string = req.params.resumeId;
        fs.readFile(path.join(ResumeDirectory, `${resumeId}.json`), 'utf8', (error, resumeData) => {
            if(error) {
                res.send(error);
            }
            res.status(200).json(resumeData);
        });
    }

    public updateResume(req: Request, res: Response) {   
        const resumeId: string = req.params.resumeId;
        const resumeData: string = req.body.resumeData;
        fs.writeFile(path.join(ResumeDirectory, `${resumeId}.json`), resumeData, (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`Resume ${resumeId} was updated.`)
        });
    } 

    public removeResume(req: Request, res: Response) {   
        const resumeId: string = req.body.resumeId;
        fs.unlink(path.join(ResumeDirectory, `${resumeId}.json`), (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`Resume ${resumeId} was deleted.`)
        });
    } 
}
