const hello = 'hello';
var world = 'world';

const sleep = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1sec'), 1000);
}) ;

sleep.then(console.log);

import add from './util';
const value = add(1,2);
console.log(value);