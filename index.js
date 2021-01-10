var hello = 'hello';
var world = 'world';
var sleep = new Promise(function (resolve, reject) {
    setTimeout(function () { return resolve('1sec'); }, 1000);
});
sleep.then(console.log);
