"use strict";
var func = function (a, b) { return a + b; };
function funcT(a, b) {
    return a + b;
}
console.log(func(1, 2));
console.log(funcT(1, 2));
//===================================
var funcP = function () {
    console.log('Teemo!');
};
function funcPT() {
    console.log('Teemo!');
}
funcP();
funcPT();
