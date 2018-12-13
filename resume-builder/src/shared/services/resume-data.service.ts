import { Observable } from "rxjs";
import { IResume } from "../models/IResume";
import { Injectable } from "@angular/core";
import { IResumeData } from "../models/IResumeData";

@Injectable()
export abstract class ResumeDataService {

    abstract getAllResume(): Observable<IResumeData[]>;

    abstract addNewResume(resumeId: string): Observable<Object>;

    abstract getResumeById(resumeId: string): Observable<IResume>;

    abstract updateResume(resumeId: string, resumeData: IResume): Observable<Object>;

    abstract removeResume(resumeId: string): Observable<Object>;

}
