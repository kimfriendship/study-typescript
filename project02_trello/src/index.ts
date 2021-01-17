import './styles/style.css';
import {CreateTodo} from './Todo'

const trello = document.querySelector('.list');

const todo = new CreateTodo(3, 'hi', false);
todo.render(trello);



