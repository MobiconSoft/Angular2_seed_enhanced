import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { BodyComponent, 
         HeaderComponent, 
         SidebarComponent, 
         AppService } from '../common/index';
import { TodoPage } from './todo/todo.page';

@Component({
  moduleId: module.id,
  selector: 'tm-app',
  viewProviders: [],
  templateUrl: './app.page.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, SidebarComponent, HeaderComponent, BodyComponent, TodoPage],
  providers: [ AppService ]
})

@Routes([
  //   { path: '/',      component: HomePage  },
  //   { path: '/about', component: AboutPage }
])

export class AppPage implements OnInit {
  isBigHeader = true;
  showSideBar = false;
  header = HeaderComponent;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    // for testing Stub file to localhost:9100 stub server
    setTimeout(() => {
      //this.appService.getStubi18n();
      this.appService.getStubGridJson();
    }, 5000);
  }

  onBodyHeaderHide(e: any) {
    this.isBigHeader = !e.isHide;
  }
  onPressHeaderMenu(e: any) {
    this.showSideBar = this.showSideBar ? false : true;
    // if (this.showSideBar) {
    // 	this.mask.isHide = false;
    // }
  }
}
