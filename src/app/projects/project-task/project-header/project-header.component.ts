import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.scss']
})
export class ProjectHeaderComponent implements OnInit {

  constructor() { }

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
