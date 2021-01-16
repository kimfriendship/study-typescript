function createAB(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const ab = createAB({ name: 'laura' }, { do() { } });
function compare(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
console.log([3, 2, 1].sort(compare));
console.log(['b', 'c', 'a'].sort(compare));
//# sourceMappingURL=chap02_intersection-union.js.map