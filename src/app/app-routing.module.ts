import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProjectTaskComponent} from "./projects/project-task/project-task.component";

const routes: Routes = [
  {path: '', component: ProjectTaskComponent},
  { path: '**', redirectTo: '/'  },


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    })

  ]
})
export class AppRoutingModule { }
