import { Component, OnInit } from '@angular/core';
import { IResume } from '../models/IResume';
import { ResumeApiDataService } from '../services/impl/resume-api-data.service';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    providers: [{
        provide: ResumeDataService,
        useClass: ResumeApiDataService
    }]
})
export class ResumeComponent implements OnInit {

    resume: IResume;

    constructor(private resumeDataService: ResumeDataService) { }

    ngOnInit() {
        this.getDefaultResumeData();
    }

    getDefaultResumeData(): void {
        this.getResumeData("YZ");
    }

    getResumeData(resumeName: string): void {
        this.resumeDataService.getResumeById(resumeName)
            .subscribe(resume => this.resume = resume);
    }

}
