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