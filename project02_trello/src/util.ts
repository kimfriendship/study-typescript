import {TodoList, Todo} from './interface'

export const generateId = (data): number => {
  const lastData = data[data.length - 1];
  if (lastData && data[0].listId >= 0) return lastData.listId + 1;
  if (lastData && data[0].id >= 0) return lastData.id + 1;
  else return 0;
};