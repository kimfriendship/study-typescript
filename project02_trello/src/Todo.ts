import {Todo, TodoListCreator, TodoCreator} from './interface'
import {generateId} from './util'
import {trelloData} from './data'

export class CreateTodo implements TodoCreator {
  todo: HTMLElement = document.createElement('li');

  constructor(readonly id: number, readonly content: string, public isDone: boolean) {
    this.todo.innerHTML = `<input type="checkbox" class="checkbox" ${isDone ? 'checked' : ''}>
                          <span class='${isDone ? 'isDone' : ''}'>${content}</span>
                          <button class="removeBtn"></button>`;
    
    this.todo.className = 'item';
    // this.todo.children.filter((child: HTMLElement) => console.log(child.nodeName));
    console.log(this.todo.children)

  }

  toggleTodo() {

    console.log('toggleTodo');
  }

  removeTodo() {
    console.log('removeTodo');
  }

  render(parentNode: HTMLElement) {
    parentNode.appendChild(this.todo);
  }
}