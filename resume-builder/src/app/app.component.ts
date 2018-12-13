import { Component } from '@angular/core';
import { ResumeHttpDataService } from './../shared/services/impl/resume-http-data.service';
import { ResumeDataService } from './../shared/services/resume-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: ResumeDataService,
    useClass: ResumeHttpDataService
  }]
})
export class AppComponent {
  title = 'resume-builder';
}
