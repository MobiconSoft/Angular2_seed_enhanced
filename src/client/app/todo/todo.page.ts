import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppStore, 
         TodoModel, 
         TodoAction } from '../../common/index';
         
import { NewTodoInput } from './components/new-todo.component';
import { TodoList } from './components/todo-list.component';

@Component({
  moduleId: module.id,
  selector: 'todo-page',
  providers: [TodoAction],
  styleUrls: ['./todo.page.css'],
  templateUrl: './todo.page.html',
  directives: [NewTodoInput, TodoList],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPage {
  todos: any;

  constructor(private store: Store<AppStore>, private todoAction: TodoAction) {
    this.todos = store.select('todos');
      // .combineLatest(store.select('visibilityFilter'), (todos: TodoModel[], visibilityFilter: any) => {
      //   return todos.filter(visibilityFilter)
      // });
  }
  
  addTodo(todo: TodoModel) {
    this.todoAction.addTodo(todo);
  }
  
  completeTodo(todo: TodoModel){
    this.todoAction.completeTodo(todo);
  }
  
  deleteTodo(todo: TodoModel){
    this.todoAction.deleteTodo(todo);
  }
  
  show(filter: string){
    this.todoAction.showFilter(filter);
  }
}