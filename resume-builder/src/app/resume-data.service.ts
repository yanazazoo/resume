import { Injectable } from '@angular/core';
import { IResume } from './resume/IResume';
import { Observable, of } from 'rxjs';
import { RESUME_YZ } from './mock-resume-YZ';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getResumeData(): Observable<IResume> {
    return of(RESUME_YZ);
  }
}
