/**
 * This is action creator sample.
 */
import { Reducer, Action } from '@ngrx/store';

import { ADD_TODO, 
         UPDATE_TODO, 
         DELETE_TODO, 
         COMPLETE_TODO, 
         ALL, 
         COMPLETE, 
         PENDING } from '../app-action.constant';
import { TodoModel } from '../models/index';
import { todoFilterCallback } from '../app-custom-type';

export const todosReducer: Reducer<Array<TodoModel>> = (state: TodoModel[] = [], action: Action) => {
  console.log('ACTION:', action.type, action.payload);
  switch(action.type){
    case ADD_TODO:
      return state.concat([Object.assign({}, action.payload, {id: state.length + 1})]);
      
    case UPDATE_TODO:
      return state.map((todo: TodoModel) => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, action.payload)
      });
      
    case COMPLETE_TODO:
      return state.map((todo: TodoModel) => {
        return todo.id !== action.payload.id ?
          todo :
          Object.assign({}, todo, {completed: true})
      });
      
    case DELETE_TODO:
      return state.filter((todo: TodoModel) => todo.id !== action.payload.id);
      
    default:
      return state;
  }
}

export const visibilityFilterReducer: Reducer<todoFilterCallback> = (state = (todo: TodoModel) => true, action: Action) => {
  console.log('ACTION:', action.type);
  switch(action.type){
    case ALL:
      return (todo: TodoModel) => true;
    case COMPLETE:
      return (todo: TodoModel) => todo.completed;
    case PENDING:
      return (todo: TodoModel) => !todo.completed;
    default:
      return state;
  }
}