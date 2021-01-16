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

const generateId = (): number => {
  const lastId: number = todoData[todoData.length - 1].id;
  return lastId + 1;
}

const addTodo = (): void => {
  const newTodo: ToDo = {id: generateId(), content: input.value, completed: false};
  todoData.push(newTodo);
  input.value = '';
  render();
}

const toggleTodo = (e): void => {
  if (e.target.className !== 'checkbox') return;
  const id: number = Number(e.target.parentNode.id);
  todoData = todoData.map((todo:ToDo) => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  render();
};

const removeTodo = (e): void => {
  if (e.target.className !== 'removeBtn') return;
  const id: number = Number(e.target.parentNode.id);
  todoData = todoData.filter((todo:ToDo) => todo.id !== id);
  render();
};

window.onload = render;
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', toggleTodo);
todoList.addEventListener('click', removeTodo);
