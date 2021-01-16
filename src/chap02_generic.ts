// function createPromise<T>(x: T, timeout: number) {
//   return new Promise((resolve: (v: T) => void, reject ) => {
//     setTimeout(() => {
//       resolve(x);
//     }, timeout);
//   });
// }
function createPromise<T>(x: T, timeout: number) {
  return new Promise<T>((resolve, reject ) => {
    setTimeout(() => {
      resolve(x);
    }, timeout);
  });
}

createPromise<string>('34', 100)
  .then(v => console.log(v));

function createTuple2<T, U>(v1: T, v2: U): [T, U] {
  return [v1, v2];
}

interface User {name: string}

interface JSONSerializer {
  serializer(): string;
}

interface DB<T> {
  add(v: T): void;
  get(): T;
}

class dataBase<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

class LocalDB<T extends JSONSerializer> implements DB<T> {
  constructor(private localStorageKey: string) {}

  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serializer());
  }
  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface Vegetable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart2<T> {
  getItem(): T extends Vegetable ? Vegetable : Meat;
}

const cart: Cart2<Vegetable> = {
  getItem() {
    return {
      v: ''
    }
  }
}

