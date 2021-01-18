import './styles/style.css';
import {CreateTodo} from './Todo'
import {CreateTodoList} from './TodoList'
import {trelloData} from './data'
import {TodoList, TodoCreator} from './interface'

const trello = document.querySelector('.container');

const getData = () => {
  let trelloHtml = '';
  
  trelloData.forEach((data: TodoList) => {
    const newTodoList = new CreateTodoList(data.listId, data.title);
    trelloHtml += newTodoList.render();
  })

  trello.innerHTML = trelloHtml;
};


window.onload = getData;
