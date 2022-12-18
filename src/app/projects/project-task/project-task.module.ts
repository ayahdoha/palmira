import { NgModule } from '@angular/core';
import { ProjectTaskComponent } from './project-task.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { DxGanttModule} from "devextreme-angular";
import { ProjectDetailsComponent} from './project-details/project-details.component';
import { ProjectTaskRoutingModule} from "./project-task-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProjectTaskComponent,
    ProjectHeaderComponent,
    ProjectContentComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    DxGanttModule,
    ProjectTaskRoutingModule
  ],
  exports:[
    ProjectHeaderComponent,
    ProjectContentComponent,
    ProjectDetailsComponent]

})
export class ProjectTaskModule { }
