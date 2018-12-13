import { Component } from '@angular/core';
import { ResumeApiDataService } from './services/impl/resume-api-data.service';
import { ResumeDataService } from './services/resume-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: ResumeDataService,
    useClass: ResumeApiDataService
  }]
})
export class AppComponent {
  title = 'resume-builder';
}
