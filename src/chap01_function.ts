const sum = (a: number, b: number): number => a + b;
function add(x: number, y: number): number {
  return x + y;
}
let result = sum(1,2);
result = add(1,2);

function buildUserInfo(name = '-', email ='-') {
  return {name, email};
}
const newUser = buildUserInfo('woojung', 'gmail');

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}

function store(type: 'can'): Storage;
function store(type: 'icecream'): ColdStorage;

function store(type: 'can' | 'icecream') {
  if (type === 'can') return {a: 'can'};
  if (type === 'icecream') return {b: 'icecream'};
  else throw new Error('unsupported type');
}

const s = store('icecream');