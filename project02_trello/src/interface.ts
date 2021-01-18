export interface TodoCreator {
  id: number;
  render(): string;
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
  listId: number; 
  title: string;
  list: Todo[];
}