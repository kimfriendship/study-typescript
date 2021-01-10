const sum = (a, b) => a + b;
function add(x, y) {
    return x + y;
}
let result = sum(1, 2);
result = add(1, 2);
function buildUserInfo(name = '-', email = '-') {
    return { name, email };
}
const newUser = buildUserInfo('woojung', 'gmail');
function store(type) {
    if (type === 'can')
        return { a: 'can' };
    if (type === 'icecream')
        return { b: 'icecream' };
    else
        throw new Error('unsupported type');
}
const s = store('icecream');
//# sourceMappingURL=chap01_function.js.map