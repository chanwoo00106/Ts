var information = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function (say) {
        console.log(say);
    }
};
console.log(information.plusOne(1));
information.changeName('안녕');
