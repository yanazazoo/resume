import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { ResumeDataService } from 'src/app/services/resume-data.service';
import { AppSettings } from 'src/app/app.settings';
import { IResume } from 'src/app/models/IResume';

@Injectable()
export class ResumeApiDataService implements ResumeDataService {

    constructor(private http: HttpClient) {
    } 

    public getAllResumeNames(): Observable<string[]> {
        return this.http.get<string[]>(`${AppSettings.RESUME_API_ENDPOINT}/resume`);
    }

    public addNewResume(resumeId: string): Observable<Object> {  
        let body = JSON.stringify({ 'resumeId': resumeId });
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${AppSettings.RESUME_API_ENDPOINT}/resume`, body, { headers: headers });
    }

    public getResumeById(resumeId: string): Observable<IResume> { 
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get<IResume>(`${AppSettings.RESUME_API_ENDPOINT}/resume/${resumeId}`, { headers: headers });
    }

    public updateResume(resumeId: string, resumeData: IResume): Observable<Object> {   
        let body = JSON.stringify({ 'resumeData': resumeData });
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${AppSettings.RESUME_API_ENDPOINT}/resume/${resumeId}`, body, { headers: headers });
    } 

    public removeResume(resumeId: string): Observable<Object> {   
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.delete(`${AppSettings.RESUME_API_ENDPOINT}/resume/${resumeId}`, { headers: headers });
    } 

}
