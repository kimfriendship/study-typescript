import './styles/style.css';
import {TodoList, TodoCreator, Todo} from './interface'
import { generateId } from './util';
import {trelloData} from './data'

const trello: HTMLElement = document.querySelector('.container');
const todoTitleInput: HTMLElement = document.querySelector('.todoTitleInput');
const addTodoListBtn: HTMLElement = document.querySelector('.addBtn');

const addTodo = (e: KeyboardEvent) => {
  if (e.key !== 'Enter') return;
  const target = e.target as HTMLInputElement;
  const value = target.value;
  const listId = Number((target.parentNode as HTMLElement).id);
  const todoData = trelloData.filter(data => data.listId === listId)[0].list;
  const id = generateId(todoData);
  todoData.push({id, content: value, isDone: false});
  render();
}

const addTodoList = () => {
  const listId: number = generateId(trelloData);
  const title: string = (todoTitleInput as HTMLInputElement).value;
  trelloData.push({listId, title, list: []});
  (todoTitleInput as HTMLInputElement).value = '';
  render();
};

const removeTodoList = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.className !== 'closeBtn') return;

  const listId: number = Number((target.parentNode as HTMLElement).id);
  trelloData = trelloData.filter((data: TodoList) => data.listId !== listId);
  render();
};

const render = () => {
  let innerHTML = '';
  
  trelloData.forEach((data: TodoList) => 
  innerHTML += `<div class="todo" id='${data.listId}'>
  <h2 class="todoTitle">${data.title}</h2>
  <ul class="list">
    ${data.list.map((todo: Todo) => `<li class='item' id='todo-${todo.id}'>
      <input type="checkbox" class="checkbox" ${todo.isDone ? 'checked' : ''}>
      <span class='${todo.isDone ? 'isDone' : ''}'>${todo.content}</span>
      <button class="removeBtn"></button>
    </li>`).join('')}
  </ul>
  <input type="text" class="newItemInput" placeholder="New Todo">
  <button class="closeBtn"></button>
  </div>`);
  
  trello.innerHTML = innerHTML;
    
  const inputs = document.querySelectorAll('.newItemInput');
  inputs.forEach(input => input.onkeyup = (e) => addTodo(e));
  console.log(trelloData)
};


window.onload = render;
addTodoListBtn.onclick = addTodoList;
trello.addEventListener('click', removeTodoList);