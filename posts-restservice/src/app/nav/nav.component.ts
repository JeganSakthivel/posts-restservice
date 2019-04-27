import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
  <ul class="navbar-nav mr-auto">
    
  <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" *ngFor= "let item of navObjects">
    <a class="nav-link" routerLink="{{ item.link }}">{{ item.name }} </a>
  </li>

</ul>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  navObjects : Object[];
  constructor() { 
    this.navObjects = [
      {name:'Posts', link : '/posts'},
      {name:'Add Post', link : '/addpost'}    
  
    ];
  }

  ngOnInit() {
  }

  
}


