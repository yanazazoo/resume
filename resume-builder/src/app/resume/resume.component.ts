import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { Observable } from 'rxjs';
import { IResume } from './IResume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: IResume;

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit() {
    this.getResumeData();
  }

  getResumeData(): void {
    this.resumeDataService.getResumeData()
        .subscribe(resume => this.resume = resume);
  }

}
