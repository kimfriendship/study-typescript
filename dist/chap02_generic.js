function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise('34', 100)
    .then(v => console.log(v));
function createTuple2(v1, v2) {
    return [v1, v2];
}
class dataBase {
    add(v) {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, v.serializer());
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : null;
    }
}
const cart = {
    getItem() {
        return {
            v: ''
        };
    }
};
//# sourceMappingURL=chap02_generic.js.map