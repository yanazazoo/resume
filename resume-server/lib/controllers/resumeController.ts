import * as fs from 'fs';
import * as path from 'path';
import { Request, Response } from 'express';
import { promiseArray } from '../shared/utilities';

const RESUME_DIRECTORY = path.join(__dirname, "../../data");

export class ResumeController {    

    public getAllResume(req: Request, res: Response) {
        fs.readdir(RESUME_DIRECTORY, (error, fileNames) => {
            if(error) res.send(error);
            promiseArray(fileNames,
                (fileName, resolve, reject) =>  {
                    fs.readFile(path.join(RESUME_DIRECTORY, fileName), 'utf-8', (err, resumeContent) => {
                        if (err) return reject(err);
                        return resolve({ id: path.basename(fileName, ".json"), resume: JSON.parse(resumeContent)});
                    });
                })
                .then(results => {
                    res.status(200).send(results);
                })
        });
    }

    public addNewResume(req: Request, res: Response) {   
        const resumeId: string = req.body.resumeId;
        fs.writeFile(path.join(RESUME_DIRECTORY, `${resumeId}.json`), 'utf8', (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`New resume ${resumeId} was created.`)
        });
    }

    public getResumeById(req: Request, res: Response) { 
        const resumeId: string = req.params.resumeId;
        fs.readFile(path.join(RESUME_DIRECTORY, `${resumeId}.json`), 'utf8', (error, resumeData) => {
            if(error) {
                res.send(error);
            }
            res.status(200).json(JSON.parse(resumeData));
        });
    }

    public updateResume(req: Request, res: Response) {   
        const resumeId: string = req.params.resumeId;
        const resumeData: string = req.body.resumeData;
        fs.writeFile(path.join(RESUME_DIRECTORY, `${resumeId}.json`), resumeData, (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`Resume ${resumeId} was updated.`)
        });
    } 

    public removeResume(req: Request, res: Response) {   
        const resumeId: string = req.body.resumeId;
        fs.unlink(path.join(RESUME_DIRECTORY, `${resumeId}.json`), (error) => {
            if(error) {
                res.send(error);
            }
            res.status(200).send(`Resume ${resumeId} was deleted.`)
        });
    } 
}
