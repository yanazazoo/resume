import { Component, OnInit } from '@angular/core';
import { IResume } from '../../shared/models/IResume';
import { ResumeDataService } from '../../shared/services/resume-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'resume-editor',
    templateUrl: './resume-editor.component.html',
    styleUrls: ['./resume-editor.component.scss']
})
export class ResumeEditorComponent implements OnInit {

    resume: IResume;

    constructor(private resumeDataService: ResumeDataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.getResumeData(params['id']);
        });
    }

    getResumeData(resumeName: string): void {
        this.resumeDataService.getResumeById(resumeName)
            .subscribe((resume: IResume) => {
                this.resume = resume
            });
    }

}
