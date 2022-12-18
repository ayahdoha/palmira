import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ProjectTaskComponent} from "./projects/project-task/project-task.component";
import {ProjectDetailsComponent} from "./projects/project-task/project-details/project-details.component";
import {ProjectContentComponent} from "./projects/project-task/project-content/project-content.component";
const routes: Routes = [
  {path: '', redirectTo: 'project-one' , pathMatch: 'full'},
  {
    path: 'project-one',
    component: ProjectTaskComponent,
    data: {
      breadcrumb: 'Scheduling',
    }
  },
  {
    path: 'project-two',
    component: ProjectDetailsComponent,
    data: {
      breadcrumb: 'Second Pro',
    }
  },

  { path: '**', redirectTo: '/'  },


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
