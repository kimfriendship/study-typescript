interface A {
  name: string;
}

interface B {
  do(): void;
}

function createAB(a: A, b:B): A & B {
  return {...a, ...b};
}

const ab = createAB({name: 'laura'}, {do() {}});

function compare(x: string, y: string);
function compare(x: number, y: number);
function compare(x: string | number, y: string | number) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if ( typeof x === 'string' && typeof y === 'string') {
    return x.localeCompare(y);
  }
  throw Error('not supported type')
}

console.log([3, 2, 1].sort(compare));
console.log(['b', 'c', 'a'].sort(compare));

function isB(v: A | B): v is B {
  return (<B>v).do !== undefined;
}

function process(v: A | B) {
  if (isB(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}