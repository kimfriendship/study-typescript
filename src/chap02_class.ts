interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}

class Cart {
  // protected user: User;
  // private store: object;

  constructor(protected user: User, private store: object = {}) {
    // this.user = user;
    // this.store = {};
  }

  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  private get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user
  }
}

const cartLucy = new Cart({name: 'Lucy'});
const cartClare = new Cart({name: 'Clare'});

interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

abstract class Korean implements Person {
  public abstract id: number;
  
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }

  abstract wearHanbok(): void;
}


class KoreanProgrammer extends Korean implements  Programmer {
  constructor(public name: string, public id: number) {
    super(name)
  }
  
  say(message: string): void {
    console.log(message);
  }
  
  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '...'
  }

  wearHanbok(): void {
    throw new Error("Method not implemented.");
  }
}

const Me = new KoreanProgrammer('Woojung', 1003);
