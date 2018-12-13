import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resume', component: HomeComponent },
    { path: 'resume/:id', component: ResumeEditorComponent },
    { path: '**', component: NotFoundComponent }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
