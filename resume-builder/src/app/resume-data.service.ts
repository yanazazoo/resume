import { Injectable } from '@angular/core';
import { IResume } from './resume/IResume';
import { Observable } from 'rxjs';
import { AppSettings } from './app.settings';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ResumeDataService {

    constructor(private http: HttpClient) { } 

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
