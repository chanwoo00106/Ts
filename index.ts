let information = {
    name : 'kim',
    age : 30,
    plusOne (x :number) :number{
      return x + 1
    },
    changeName : (say :string):void => {
      console.log(say);
    }
}
console.log(information.plusOne(1));
information.changeName('안녕');