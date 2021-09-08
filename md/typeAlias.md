# type alias

함수 타입 선언 법

```ts
type NumOut = (x : number, y : number ) => number ;
let ABC :NumOut = function(x,y){
  return x + y
}
```

methods 안에 타입 지정

```ts
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
```