"use strict";
var user = {
    name: 'Neo',
    age: 36,
    getData: function (data) {
        if (typeof data === 'string') {
            return data.split('');
        }
        else {
            return data.toString();
        }
    }
};
user.getData('Hello'); // ['h', 'e', 'l', 'l', 'o']
user.getData(123); // '123'
