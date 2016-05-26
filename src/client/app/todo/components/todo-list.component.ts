import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './todo-item.component';

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <todo-item 
        *ngFor="let todo of todos"
        [todo]="todo"
        (complete)="completeTodo.emit($event)"
        (delete)="deleteTodo.emit($event)"
      ></todo-item>
    </div>
  `,
  directives: [TodoItem]
})
export class TodoList {
  @Input() todos: any;
  @Output('complete') completeTodo = new EventEmitter();
  @Output('delete') deleteTodo = new EventEmitter()
}