const obj = {
    a: 'Hello~',
    b: function () {
        console.log(this.a);
    }
};


const b = obj.b;
b(); // Cannot read property 'a' of undefined

function someFn(cb: any) {
    cb();
}
someFn(obj.b); // Cannot read property 'a' of undefined

setTimeout(obj.b, 100); // undefined