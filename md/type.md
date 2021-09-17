# 타입 지정

타입스크립트는 `변수`, `매개 변수`, `객체 속성`등에 `:type`과 같은 형식으로 타입을 지정 할 수 있다.

```ts
function add(a: number, b: number): number{
    return a + b;
}

console.log(add(1, 2)); // 3
```

add 함수의 매개 변수 a와 b는 number 타입이라고 지정했고,<br>
마지막에 함수에 return 타입도 number라고 지정했다.

js로 컴파일을 하면 결과는 아래와 같다.

```js
"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(1, 2)); // 3
```

# 타입 에러

만약 다음과 같이 변수 sum을 number가 아닌 string 타입이어야 한다고 지정했다면,<br>
컴파일조차 하지 않고 코드를 작성하는 시점에서 에러가 발생합니다.

```ts
function add(a: number, b: number): string{
    return a + b;
}

console.log(add(1, 2)); // 3
```

TS2322라는 에러 코드를 볼 수 있는데 이걸 구글에 검색을 하면 쉽게 에러 코드에 대한 정보를 알 수 있다.

# 여러 타입들

> <b style="font-size: 2rem">Boolean</b><br>
> 단순한 참(true)/거짓(false) 값을 나타냅니다.
```ts
const bool: booleanT = true;
const bool: booleanF = false;
```

> <b style="font-size: 2rem">Number</b><br>
> 모든 부동 소수점 값을 사용할 수 있습니다.<br>
> ES6에 도입된 2진수 및 8진수 리터럴도 지원합니다.

```ts
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;
```

> <b style="font-size: 2rem">String</b><br>
> 작은따옴표('), 큰따옴표(") 뿐만 아니라 ES6의 템플릿 문자열도 지원합니다.

```ts
const string: string = `${name} Hello!`;
const string2: string = 'hello Teemo';
const string3: string = "this is string";
```

> <b style="font-size: 2rem">Array</b><br>
> 순차적으로 값을 가지는 일반 배열을 나타냅니다.<br>
> 배열은 다음과 같이 두 가지 방법으로 타입을 선언할 수 있습니다.

```ts
// 문자열만 가지는 배열
const arrS: string[] = [ 'h', 'e', 'l', 'l', 'o', ' Teemo' ];

// 숫자만 가지는 배열
const arrN: number[] = [ 1, 2, 3, 4, 5, 6 ];
```

> 유니언 타입(다중 타입)의 `문자열과 숫자를 동시에 가지는 배열`도 선언할 수 있습니다.

```ts
const arrSN: (number | string)[] = ['Teemo', 123, 'hello', 3.141592653589793238];
```

> 배열이 가지는 항목의 값을 단언할 수 없다면 any를 사용할 수 있습니다.

```ts
const arrAny: any[] = [1, 'Teemo', false, {}, []];
```

> 인터페이스(Interface)나 커스텀 타입(Type)을 사용할 수도 있습니다.

```ts
interface IUser {
  name: string,
  age: number,
  isValid: boolean
}
let userArr: IUser[] = [
  {
    name: 'Teemo',
    age: 10,
    isValid: true
  },
  {
    name: 'Hyungwoo who likes js',
    age: 52,
    isValid: false
  },
  {
    name: 'chan',
    age: 17,
    isValid: true
  }
];
```

> 유용하진 않지만, 다음과 같이 특정한 값으로 타입을 대신해 작성할 수도 있습니다.

```ts
let array = 10[];
array = [10];
array.push(10);
array.push(11); // Error - TS2345
```

> readonly 키워드나 ReadonlyArray 타입을 사용하면<br>
> 읽기 전용 배열을 생성할 수도 있습니다.

> <b style="font-size: 2rem">Tuple</b><br>
> Tuple 타입은 배열과 매우 유사합니다.<br>
> 차이점이라면 정해진 타입의 고정된 길이(length) 배열을 표현합니다.

```ts
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['a', 1, 2]; // Error - TS2322
tuple = [1, 'a']; // Error - TS2322
```

> 다음과 같이 데이터를 개별 변수로 지정하지 않고,<br>
> 단일 Tuple 타입으로 지정해 사용할 수 있습니다.

```ts
const name: string = "Teemo";
const age: number = 10;
const vote: boolean = false;

const user = [string, number, boolean] = ["Teemo", 10, false];
user[0] // Teemo
user[1] // 10
user[2] // false
```

>  위 방식을 활용해 다음과 같은 Tuple 타입의 배열(2차원 배열)을 사용할 수 있습니다.

```ts
let users: [number, string, boolean][];
users = [[1, 'Teemo', true], [2, 'Hyungwoo who likes js', false], [3, 'chan', true]];
```

> Tuple은 `정해진 타입의 고정된 길이 배열`을 표현한다.<br>
> 그러므로 .push()나 .splice() 등을 통해 값을 넣는 행위는 막을 수 없습니다.

```ts
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['b', 2];
tuple.push(3);
console.log(tuple); // ['b', 2, 3];
tuple.push(true); //error TS2345
```

마찬가지로 `readonly`로 선언할 수 있다.