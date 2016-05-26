/**
 * This is action creator sample.
 */
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppStore } from '../app-store';

import { TodoModel } from '../models/index';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO } from '../app-action.constant';

@Injectable()
export class TodoAction {
  constructor(private store: Store<AppStore>) {}
  
  addTodo(payload: TodoModel) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: payload
    });
  }

  updateTodo(payload: TodoModel) {
    this.store.dispatch({
      type: UPDATE_TODO,
      payload: payload
    });
  }

  deleteTodo(payload: TodoModel) {
    this.store.dispatch({
      type: DELETE_TODO,
      payload: payload
    });
  }

  completeTodo(payload: TodoModel) {
    this.store.dispatch({
      type: COMPLETE_TODO,
      payload: payload
    });
  }

  showFilter(showType: string) {
    this.store.dispatch({
      type: showType
    });
  }
}


