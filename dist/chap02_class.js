class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cartLucy = new Cart({ name: 'Lucy' });
const cartClare = new Cart({ name: 'Clare' });
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + '...';
    }
    wearHanbok() {
        throw new Error("Method not implemented.");
    }
}
const Me = new KoreanProgrammer('Woojung', 1003);
//# sourceMappingURL=chap02_class.js.map