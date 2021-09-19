"use strict";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return this.name + " hello!";
    };
    User.prototype.changeName = function (name) {
        this.name = name;
    };
    return User;
}());
var teemo = new User('Teemo');
console.log(teemo.sayHello());
teemo.changeName('teemo');
console.log(teemo.sayHello());
