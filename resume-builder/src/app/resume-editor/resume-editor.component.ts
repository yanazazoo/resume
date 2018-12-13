import { Component, OnInit } from '@angular/core';
import { IResume } from '../models/IResume';
import { ResumeApiDataService } from '../services/impl/resume-api-data.service';
import { ResumeDataService } from '../services/resume-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'resume-editor',
    templateUrl: './resume-editor.component.html',
    styleUrls: ['./resume-editor.component.scss'],
    providers: [{
        provide: ResumeDataService,
        useClass: ResumeApiDataService
    }]
})
export class ResumeEditorComponent implements OnInit {

    resume: IResume;

    constructor(private resumeDataService: ResumeDataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.getResumeData(params['id']);
        });
    }

    getDefaultResumeData(): void {
        this.getResumeData("YZ");
    }

    getResumeData(resumeName: string): void {
        this.resumeDataService.getResumeById(resumeName)
            .subscribe(resume => this.resume = resume);
    }

}
