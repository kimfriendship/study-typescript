import {TodoList} from './interface'

export let trelloData: TodoList[] = [
  {
    listId: 0,
    title: 'study',
    list: [
      {id: 0, content: 'vue', isDone: false},
      {id: 1, content: 'react', isDone: true},
      {id: 2, content: 'typescript', isDone: false},
    ]
  },
  {
    listId: 1,
    title: 'play',
    list: [
      {id: 0, content: 'watch movie', isDone: true},
      {id: 2, content: 'go to sleep', isDone: false},
      {id: 1, content: 'make snowman', isDone: true},
    ]
  }
];