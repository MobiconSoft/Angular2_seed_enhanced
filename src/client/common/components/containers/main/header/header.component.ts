import { Component, Output, EventEmitter } from '@angular/core';
import { SearchComponent, ButtonComponent } from '../../../common/index';

@Component({
    selector: 'tm-header',
    moduleId: module.id,
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html',
    directives: [ButtonComponent, SearchComponent]
})

export class HeaderComponent {
  @Output() pressMenu: EventEmitter<any> = new EventEmitter();
  onClickMenuIcon(e: any) {
    this.pressMenu.emit(e);
  }
}
