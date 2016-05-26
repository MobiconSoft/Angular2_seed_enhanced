import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <li>
      <span [class.completed]="todo.completed">{{todo.text}}</span>
      <button (click)="complete.emit(todo)"> Done </button>
      <button (click)="destroy.emit(todo)"> Delete </button>
    </li>
  `
})
export class TodoItem {
  @Input() todo: any;
  @Output() complete = new EventEmitter();
  @Output('delete') destroy = new EventEmitter()
}