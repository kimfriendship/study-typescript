"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = 'hello';
var world = 'world';
const sleep = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1sec'), 1000);
});
sleep.then(console.log);
const util_1 = require("./util");
const value = util_1.default(1, 2);
console.log(value);
