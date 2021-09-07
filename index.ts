let value:string = 'kim';// 변수를 선언할 때 타입을 선언해줘야함
let arr:string[] = ['hello', 'hi', 'Teemo'];
let obj:{name: string} = {name: "teemo"};
let twotype: string | number = 1234;

type Member = [number, boolean];

let Teemo:Member = [123, true];

function func(x: number) : number{
    return x * 2;
}