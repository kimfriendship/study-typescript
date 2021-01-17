import {trelloData} from './data';
import {TodoListCreator} from './interface';

export class CreateTodoList implements TodoListCreator {
  todoList: HTMLElement;

  constructor() {}

  addTodo() {
    throw new Error('Method not implemented.');
  }
  
  removeList() {
    throw new Error('Method not implemented.');
  }
}


