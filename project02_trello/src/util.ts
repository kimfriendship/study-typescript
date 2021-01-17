import {TodoList, Todo} from './interface'

export const generateId = (data: TodoList[] | Todo[]): number => {
  const lastId = data[data.length - 1].id;
  return lastId + 1;
};