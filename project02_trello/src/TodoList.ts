import {trelloData} from './data';
import {TodoListCreator, Todo} from './interface';
import { generateId } from './util';

export class CreateTodoList implements TodoListCreator {
  todoList: HTMLElement;
  list: Todo[];
  // listId: number = generateId(trelloData);

  constructor(readonly listId: number, readonly title: string) {

  }

  addTodo() {
    throw new Error('Method not implemented.');
  }

  removeList() {
    throw new Error('Method not implemented.');
  }

  render() {
    const innerHtml = 
      `<div class="todo" id='${this.listId}'>
        <h2 class="todoTitle">${this.title}</h2>
        <ul class="list"></ul>
        <input type="text" class="newItemInput" placeholder="New Todo">
        <button class="closeBtn"></button>
    </div>`

    return innerHtml;
  }
}


