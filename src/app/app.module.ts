import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from '@angular/router';
import { ProjectTaskModule} from "./projects/project-task/project-task.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    ProjectTaskModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
