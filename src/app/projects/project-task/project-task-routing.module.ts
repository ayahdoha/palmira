import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {ProjectContentComponent} from "./project-content/project-content.component";

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTaskRoutingModule { }
