const hello = 'hello';
var world = 'world';

const sleep = new Promise((resolve, reject) => {
  setTimeout(() => resolve('1sec'), 1000);
}) ;

sleep.then(console.log);