# value

타입스크립트는 변수만들 때 변수의 타입을 지정가능하다. <br>
지정한 타입과 다른 값을 넣으면 에러가 난다.

```ts
let age : number = 50;
let TF : boolean = true;
let none : null = null;
let un : undefined = undefined;
let array :string[] = ['Teemo', 'chan']

let obj :{member: string, member2: string} = {member: 'Teemo', member2: "hello"}
```

사실 타입을 지정하지 않아도 primitive types이라고 알아서 지정해줌

```ts
let primitive = 'hello' // 자동으로 문자열로 해줌
let arr = [2,3,4,5,6,7,8,'sdfjslf']

let pobj = {Teemo: 'cute'}
```

