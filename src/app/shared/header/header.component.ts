import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private eRef: ElementRef) { }
  showProfileMenu = false;
  showNotificationMenu = false;
  activeSearch = false;
  ngOnInit(): void {
  }


  @HostListener('document:click', ['$event'])
  onClickBody(event : any) {
    if (this.eRef.nativeElement.querySelector('.profile-toggle-menu') && !this.eRef.nativeElement.querySelector('.profile-toggle-menu').contains(event.target) ){
      this.showProfileMenu = false;
    }
    if (this.eRef.nativeElement.querySelector('.notification-toggle-menu') && !this.eRef.nativeElement.querySelector('.notification-toggle-menu').contains(event.target) ){
      this.showNotificationMenu = false;
    }
  }
}
