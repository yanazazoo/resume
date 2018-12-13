import { Component, OnInit } from "@angular/core";
import { ResumeDataService } from "../services/resume-data.service";
import { IResume } from "../models/IResume";
import { IResumeData } from "../models/IResumeData";

@Component({
    selector: 'resume-box',
    templateUrl: './resume-box.component.html',
    styleUrls: ['./resume-box.component.scss']
})
export class ResumeBoxComponent implements OnInit {

    resumeList: IResumeData[];

    constructor(private resumeDataService: ResumeDataService) { }

    ngOnInit() {
        this.getResumeList();
    }

    getResumeList(): void {
        this.resumeDataService.getAllResume()
            .subscribe((resumeObjects: IResumeData[]) => {
                this.resumeList = resumeObjects;
        });
    }
}
