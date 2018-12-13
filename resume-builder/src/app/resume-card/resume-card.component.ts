import { Component, OnInit, Input } from "@angular/core";
import { IResume } from "../models/IResume";
import { IResumeData } from "../models/IResumeData";

@Component({
    selector: 'resume-card',
    templateUrl: './resume-card.component.html',
    styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent implements OnInit {
    
    @Input() resumeData: IResumeData;

    resumeId: string;

    resumeContent: IResume;

    constructor() { 
    }

    ngOnInit() {
        this.resumeId = this.resumeData.id;
        this.resumeContent = this.resumeData.resume;
    }
}
