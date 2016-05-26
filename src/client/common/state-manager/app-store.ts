/**
 * This file manage the constant value for action.
 */
import { TodoModel } from './models/index';
import { todoFilterCallback } from './app-custom-type';

export interface AppStore {
  todos: TodoModel[],
  visibilityFilter: todoFilterCallback
}
