/**
 * Define custom type. It's only used during development. 
 */
import { TodoModel } from './models/index';

export type todoFilterCallback = (todo: TodoModel) => boolean;