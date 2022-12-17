import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTaskComponent } from './project-task.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { DxGanttModule} from "devextreme-angular";


@NgModule({
  declarations: [
    ProjectTaskComponent,
    ProjectHeaderComponent,
    ProjectContentComponent
  ],
  imports: [
   // CommonModule
    DxGanttModule
  ],
  exports:[
    ProjectHeaderComponent,
    ProjectContentComponent]

})
export class ProjectTaskModule { }
