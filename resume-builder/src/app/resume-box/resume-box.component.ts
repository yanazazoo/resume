import { Component, OnInit } from "@angular/core";
import { ResumeDataService } from "../../shared/services/resume-data.service";
import { IResumeData } from "../../shared/models/IResumeData";

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
