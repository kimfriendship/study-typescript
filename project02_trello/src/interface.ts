export interface TodoCreator {
  todo: HTMLElement;
  toggleTodo();
  removeTodo();
}

export interface TodoListCreator {
  todoList: HTMLElement;
  addTodo();
  removeList();
}

export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

export interface TodoList {
  id: number; 
  title: string;
  list: Todo[];
}