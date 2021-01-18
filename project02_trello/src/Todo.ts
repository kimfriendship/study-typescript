import {TodoList, TodoCreator} from './interface'
import {generateId} from './util'
import {trelloData} from './data'

export class CreateTodo implements TodoCreator {
  readonly id: number;

  constructor(readonly listId: number, readonly content: string, public isDone: boolean) {
    this.id = generateId(trelloData.filter((list: TodoList) => list.listId === listId))
  }

  render() {
    const innerHtml = 
      `<li class='item' id=${this.id}>
        <input type="checkbox" class="checkbox" ${this.isDone ? 'checked' : ''}>
        <span class='${this.isDone ? 'isDone' : ''}'>${this.content}</span>
        <button class="removeBtn"></button>
      </li>`;
    
    return innerHtml;
  }
}