import {TodoList} from './interface'

export const trelloData: TodoList[] = [
  {
    id: 0,
    title: 'study',
    list: [
      {id: 0, content: 'vue', isDone: false},
      {id: 1, content: 'react', isDone: true},
      {id: 2, content: 'typescript', isDone: false},
    ]
  },
  {
    id: 1,
    title: 'play',
    list: [
      {id: 0, content: 'watch movie', isDone: false},
      {id: 1, content: 'make snowman', isDone: true},
      {id: 2, content: 'go to sleep', isDone: false},
    ]
  }
];