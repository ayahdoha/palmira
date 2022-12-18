import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  constructor(public service: DataService) { }

  ngOnInit(): void {
  }
  onButtonGroupClick($event: any){
    let clickedElement = $event.target || $event.srcElement;
    if( clickedElement.nodeName === "LABEL" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }

  }
}
