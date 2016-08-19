var counter = 0;
var final;
var greeting;
var p1 = new Promise(function (resolve, reject) {
    counter = counter + 1;
    resolve(counter);
});
var p2 = new Promise(function (resolve, reject) {
    resolve('hello world');
});
function doMultipleThings() {
    p1.then(function (result) {
        final = result + 1;
        p2.then(function (result) {
            greeting = "a very common saying is: " + result;
            console.log(final);
            console.log(greeting);
        });
    });
}
