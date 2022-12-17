import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from "./header/header.component";
import { BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import { SideBarMenuComponent} from "./side-bar-menu/side-bar-menu.component";
import { ToggleCircleMenuComponent} from "./toggle-circle-menu/toggle-circle-menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SideBarMenuComponent,
    ToggleCircleMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SideBarMenuComponent,
    ToggleCircleMenuComponent
  ]
})
export class SharedModule { }
