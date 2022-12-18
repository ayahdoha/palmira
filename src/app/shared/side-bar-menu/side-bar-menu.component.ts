import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss']
})
export class SideBarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onProjectGroupClick($event: any){
    let clickedElement = $event.target || $event.srcElement;
    if( clickedElement.nodeName === "LI" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active-li");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active-li");
      }
      clickedElement.className += " active-li";
    }

  }
}
