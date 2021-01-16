interface Props {
  name: string;
  [key: string]: string;
}


const p: Props = {
  name: 'fsdjkl',
  a: 'd',
  b: 'e', 
  c: '3',
  3: 'x'
}

let keys: keyof Props;

interface C {
  name: string;
  age: number;
  hello(msg: string): void;
}

let keysOfUser: keyof C;
keysOfUser = 'age';

let helloMethod: C['hello'];
helloMethod = (msg: string) => msg;
