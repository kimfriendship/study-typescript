import './styles/style.css';
import {ToDo} from './interface';

let todoData: ToDo[] = [
  {id: 0, content: 'typescript', completed: false},
  {id: 1, content: 'vue', completed: false},
];

const input: HTMLElement = document.getElementById('input');
const todoList: HTMLElement = document.getElementById('todoList');
const addBtn: HTMLElement = document.querySelector('.addBtn');

const render = (): void => {
  todoList.innerHTML = todoData.map((todo: ToDo) => `<li class='todo' id=${todo.id}>
                        <input type="checkbox" class='checkbox' ${todo.completed? 'checked' : ''}>
                        <span class='${todo.completed ? 'completed' : ''}'>${todo.content}</span>
                        <button class="removeBtn">X</button>
                      </li>`).join('');
};
