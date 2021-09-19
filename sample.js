"use strict";
var obj = {
    a: 'Hello~',
    b: function () {
        console.log(this.a);
    }
};
var b = obj.b;
b(); // Cannot read property 'a' of undefined
function someFn(cb) {
    cb();
}
someFn(obj.b); // Cannot read property 'a' of undefined
setTimeout(obj.b, 100); // undefined
