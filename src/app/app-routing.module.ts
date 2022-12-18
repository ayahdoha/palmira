import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ProjectTaskComponent} from "./projects/project-task/project-task.component";
const routes: Routes = [
  {path: '', component: ProjectTaskComponent,
  loadChildren: () => import('./projects/project-task/project-task.module').then(m => m.ProjectTaskModule),
    data: {
      breadcrumb: 'Scheduling'
    },
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
