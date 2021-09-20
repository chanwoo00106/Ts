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

# Boolean
> 단순한 참(true)/거짓(false) 값을 나타냅니다.
```ts
const bool: booleanT = true;
const bool: booleanF = false;
```

# Number
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

# String
> 작은따옴표('), 큰따옴표(") 뿐만 아니라 ES6의 템플릿 문자열도 지원합니다.

```ts
const string: string = `${name} Hello!`;
const string2: string = 'hello Teemo';
const string3: string = "this is string";
```

# Array
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

# Tuple
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

> 마찬가지로 `readonly`로 선언할 수 있다.

# Enum
> Enum은 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입으로,<br>
> 값의 종류가 일정한 범위로 정해져 있는 경우 유용합니다.
>
> 기본적으로 0부터 시작하며 값은 1씩 증가하고<br>
> 역방향 매핑이 가능합니다.

```ts
enum Week {
    Sun, // 0
    Mon, // 1
    Tue, // 2
    Wed, // 3
    Thu, // 4
    Fri, // 5
    Sat // 6
}

console.log(Week.Tue); // 2
console.log(Week[2]); // Tue
```

> 수동으로 값을 변경할 수 있으며, 값을 변경한 부분부터 다시 1씩 증가합니다.

```ts
enum Week {
    Sun, // 0
    Mon = 12, // 12
    Tue, // 13
    Wed, // 14
    Thu, // 15
    Fri, // 16
    Sat // 17
}

console.log(Week.Tue); // 13
console.log(Week[13]); // Tue
```

> 추가로, Enum은 숫자 값 열거뿐만아니라<br>
> 다음과 같이 문자열 값으로 초기화할 수 있습니다.<br>
> 하지만 개별적으로 초기화를 해야해서 굉장히 귀찮습니다.

```ts
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Red); // red
console.log(Color['red']) // Red
```

# Any
> Any는 모든 타입을 의미합니다.<br>
> 따라서 일반적인 자바스크립트 변수와 동일하게 어떤 타입의 값도 할당할 수 있습니다.<br>
> 외부 자원을 활용해 개발할 때 `불가피`하게 타입을 단언할 수 없는 경우, 유용할 수 있습니다.

```ts
let any: any = 123;
any = 'Hello world';
any = {};
any = null;
```

다양한 값을 포함하는 배열을 나타낼 때 사용할 수도 있습니다.

```ts
const list: any[] = [1, true, 'Anything!'];
```

# Unknown
> Any와 같이 최상위 타입인 Unknown은 알 수 없는 타입을 의미합니다.<br>
> Any와 같이 Unknown에는 어떤 타입의 값도 할당할 수 있지만,<br>
> Unknown을 다른 타입에는 할당할 수 없습니다.
>
> 다양한 타입을 반환할 수 있는 API에서 유용할 수 있습니다.
>
> `Unknown 보단 좀 더 명확한 타입을 사용하는 것이 좋습니다.`

```ts
let a: any = 123;
let u: unknown = 123;

let v1: boolean = a; // 모든 타입(any)은 어디든 할당할 수 있습니다.
let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없습니다. ts(2322)
let v3: any = u; // OK!
let v4: number = u as number; // 타입을 단언하면 할당할 수 있습니다.
```

# Object
> 기본적으로 typeof 연산자가 "object"로 반환하는 모든 타입을 나타냅니다.


```ts
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();
```

> 여러 타입의 상위 타입이기 때문에 그다지 유용하지 않습니다.<br>
> 보다 정확하게 타입 지정을 하기 위해 다음과 같이 객체 속성(Properties)들에 대한<br>
> 타입을 개별적으로 지정할 수 있습니다.

```ts
let userA: { name: string, age: number, email: string } = {
  name: 'Hyung woo',
  age: 123,
  email: 'ilovejs@js.com'
};

let userB: { name: string, age: number } = { // Error ts(2739)
  name: 'anything',
  age: false, // Error
};
```

> 반복적인 사용을 원하는 경우, interface나 type을 사용하는 것을 추천합니다.

```ts
interface IUser {
    name: string,
    age: number,
    email: string
}

let userA: IUser = {
  name: 'Hyung woo',
  age: 123,
  email: 'ilovejs@js.com'
};

let userB: IUser = { // Error ts(2739)
  name: 'anything',
  age: false, // Error
};
```

# Null과 Undefined
> 기본적으로 Null과 Undefined는 모든 타입의 하위 타입으로,<br>
> 다음과 같이 각 타입에 할당할 수 있습니다.<br>
> 심지어 서로의 타입에도 할당 가능합니다.
>
> strictNullChecks를 false로 하면 할 수 있음

```ts
const num: number = undefined;
const str: string = null;
const arr: string[] = [null, undefined];
```

> 단 void에는 Undefined를 할당할 수 없습니다.


```ts
let voi: void = undefined; // ok
```

# Void
> Void는 일반적으로 값을 반환하지 않는 함수에서 사용합니다.<br>
> : void 위치는 함수가 반환 타입을 명시하는 곳입니다.

```ts
function sayHello(name: string): void {
  console.log(`${name} hello!`);
}
```

값을 반환하지 않는 함수는 실제로는 `undefined`를 반환합니다.

```ts
function sayHello(name: string): void {
  console.log(`${name} hello!`);
}

const hi: void = sayHello('world'); // Hello world
console.log(hi); // undefined
```

```ts
// Error - TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
function sayHello(msg: string): undefined {
  console.log(`Hello ${msg}`);
}
```

# Naver
> Never은 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없습니다.

```ts
function error(message: string): never {
  throw new Error(message);
}
```

> 보통 다음과 같이 빈 배열을 타입으로 잘못 선언한 경우 볼 수 있습니다.

```ts
const never: [] = [];
never.push(3); // Error - TS2345
```

# Union
> 2개 이상의 타입을 허용하는 경우, 이를 유니언 이라고 합니다.<br>
> `|`를 사용해 타입을 구분하며, `()`는 선택 사항입니다.

```ts
const a: (string | number) = 123;
a = 'hello';
```

# Intersection
> `&`(ampersand)를 사용해 2개 이상의 타입을 조합하는 경우,<br>
> 이를 인터섹션(Intersection)이라고 합니다.<br>
> 인터섹션은 새로운 타입을 생성하지 않고 기존의 타입들을 조합할 수 있기 때문에<br>
> 유용하지만, 자주 사용되는 방법은 아닙니다.

```ts
interface user {
  name: string,
  age: number
};

interface gender {
  gen: string
}

const chanwoo: user & gender =  {
  name: 'chan',
  age: 17,
  gen: 'men'
}
```

# function

> 화살표 함수를 이용해 타입을 지정할 수 있습니다.<br>
> 인수의 타입과 반환 값의 타입을 입력합니다.

```ts
// 인수 2개를 받고 반환값이 숫자인 경우
const func = (a: number, b: number): number => a + b;

function funcT(a: number, b: number): number {
    return a + b;
}

console.log(func(1, 2));
console.log(funcT(1, 2));

//===================================

// 반환값이 없을 경우
const funcP = (): void => {
    console.log('Teemo!');
};

function funcPT(): void {
    console.log('Teemo!');
}

funcP();
funcPT();
```

# Inference
> 명시적으로 타입 선언이 되어있지 않은 경우,<br>
> 타입스크립트는 타입을 추론해 제공합니다.

```ts
let num = 12;
num = 'chan!'; // TS2322
```

> 변수 `num`을 초기화 하면서 `12`를 할당해 Number라는 타입으로 추론되었고<br>
> 따라서 `num`에 'chan!'을 할당할 수 없게 되었다.
>
> 타입스크립트가 추론을 하는 경우는 아래와 같다

- 초기화된 변수
- 기본값이 설정된 매개 변수
- 반환 값이 있는 함수

# Assertions

> 타입스크립트가 타입 추론을 통해 판단할 수 있는 타입의 범주를 넘는 경우,<br>
> 더이상 추론하지 않도록 지시할 수 있습니다.
>
> 설명을 하자면 `val`는 string또는 number가 될 수 있고<br>
> `isNumber`는 boolean타입이며 isNumber가 true일 경우 val은 숫자일 것이고,<br>
> 이에 toFixed를 사용할 수 있음을 확실히 알 수 있습니다.
>
> 하지만 타입스크립트는 ‘isNumber’라는 이름만으로 위 내용을 추론할 수 없기 때문에<br>
> “val이 문자열인 경우 toFixed를 사용할 수 없다”고 (컴파일 단계에서) 다음과 같은 에러를 반환합니다.

```ts
function someFunc(val: string | number, isNumber: boolean) {
  // some logics
  if (isNumber) {
    val.toFixed(2); // Error - TS2339: ... Property 'toFixed' does not exist on type 'string'.
  }
}
```

> 따라서 `isNumber`가 true일 때 `val`이 숫자임을 다음과 같이 2가지 방식으로 단언할 수 있습니다.<br>

```ts
function someFunc(val: string | number, isNumber: boolean) {
  // some logics
  if (isNumber) {
    // 1. 변수 as 타입
    (val as number).toFixed(2);
    // Or
    // 2. <타입>변수
    // (<number>val).toFixed(2);
  }
}
```

# Non-null 단언 연산자
> 피연산자가 Nullish(null이나 undefined) 값이 아님을 단언할 수 있는데,<br>
> 변수나 속성에서 간단하게 사용할 수 있기 때문에 유용합니다.

> fnA 함수를 살펴보면, 매개 변수 x는 함수 내에서 toFixed를<br>
> 사용하는 숫자 타입으로 처리되지만 null이나 undefined일 수 있기 때문에<br>
> 에러가 발생합니다.
>
> 이를 타입 단언이나 `if` 조건문으로 해결할 수도 있지만,<br>
> 마지막 함수와 같이 `!`를 사용하는 Non-null 단언 연산자를 이용해<br>
> 간단하게 정리할 수 있습니다.

> strictNullChecks를 false로 하면 전부 에러가 나지 않습니다

```ts
// Error - TS2533: Object is possibly 'null' or 'undefined'.
function fnA(x: number | null | undefined) {
  return x.toFixed(2);
}

// if statement
function fnD(x: number | null | undefined) {
  if (x) {
    return x.toFixed(2);
  }
}

// Type assertion
function fnB(x: number | null | undefined) {
  return (x as number).toFixed(2);
}
function fnC(x: number | null | undefined) {
  return (<number>x).toFixed(2);
}

// Non-null assertion operator
function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}
```

> 특히 컴파일 환경에서 체크하기 어려운 DOM 사용에서 유용합니다.<br>
> 물론 일반적인 타입 단언을 사용할 수도 있습니다.

```ts
// Error - TS2531: Object is possibly 'null'.
document.querySelector('.menu-item').innerHTML;

// Type assertion
(document.querySelector('.menu-item') as HTMLDivElement).innerHTML;
(<HTMLDivElement>document.querySelector('.menu-item')).innerHTML;

// Non-null assertion operator
document.querySelector('.menu-item')!.innerHTML;
```

# 타입 가드(Guards)

> val의 타입을 매번 보장하기 위해 타입 단언을 여러 번 사용하게 되는 경우가 있습니다.

```ts
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    (val as number).toFixed(2);
    isNaN(val as number);
  } else {
    (val as string).split('');
    (val as string).toUpperCase();
    (val as string).length;
  }
}
```

> 이럴 때는 `typeof`와 `if`를 사용해 주면 된다

```ts
function someFunc(val: string | number, isNumber: boolean) {
  if (typeof val === number) {
    number.toFixed(2);
    isNaN(number);
  } else {
    val.split('');
    val.toUpperCase();
    val.length;
  }
}
```

# 인터페이스(interface)

> 인터페이스(Interface)는 타입스크립트 여러 객체를 정의하는 일종의 규칙이며 구조입니다.<br>
> 다음과 같이 interface 키워드와 함께 사용합니다.

```ts
interface IUser {
  name: string,
  age: number,
  isValid: boolean
}

const user1: IUser = {
  name: 'chan',
  age: 17,
  isValid: false
}
```

> `:`(colon), `,`(comma) 혹은 기호를 사용하지 않을 수 있습니다.

```ts
interface IUser {
  name: string,
  age: number
}
// Or
interface IUser {
  name: string;
  age: number;
}
// Or
interface IUser {
  name: string
  age: number
}
```

> 다음과 같이 속성에 ?를 사용하면 선택적 속성으로 정의할 수 있습니다.

```ts
interface IUser {
  name: string,
  age: number,
  isAdult?: boolean // Optional property
}

// `isAdult`를 초기화하지 않아도 에러가 발생하지 않습니다.
let user: IUser = {
  name: 'Neo',
  age: 123
};
```

# 읽기 전용 속성(Readonly properties)

> `readonly` 키워드를 사용하면 초기화된 값을 유지해야 하는 읽기 전용 속성을 정의할 수 있습니다.

```ts
interface IUser {
  readonly name: string,
  age: number
}

// 초기화
let user: IUser = {
  name: 'Neo',
  age: 36
};

user.age = 85; // Ok
user.name = 'Evan'; // Error - TS2540: Cannot assign to 'name' because it is a read-only property.
```

> 만약 모든 속성이 readonly일 경우, 유틸리티(Utility)나 단언(Assertion) 타입을 활용할 수 있습니다.

```ts
// All readonly properties
interface IUser {
  readonly name: string,
  readonly age: number
}
let user: IUser = {
  name: 'Neo',
  age: 36
};
user.age = 85; // Error
user.name = 'Evan'; // Error

// Readonly Utility
interface IUser {
  name: string,
  age: number
}
let user: Readonly<IUser> = {
  name: 'Neo',
  age: 36
};
user.age = 85; // Error
user.name = 'Evan'; // Error


// Type assertion
let user = {
  name: 'Neo',
  age: 36
} as const;
user.age = 85; // Error
user.name = 'Evan'; // Error
```

# 함수 타입

> 함수 타입을 인터페이스로 정의하는 경우, 호출 시그니처(Call signature)라는 것을 사용합니다.<br>
> 호출 시그니처는 다음과 같이 함수의 매개 변수(parameter)와 반환 타입을 지정합니다.

> interface `func`로 함수 타입을 정의하고 매개변수 `name`을 가지고 string 타입을 반환 합니다.<br>
> 매개변수 이름은 같을 필요는 없습니다

```ts
interface func {
  (name: string): string
}

const sayHello: func = (n) => {
  return `${n} hello!`;
}

console.log(sayHello('Teemo'))
```

# 클래스 타입

> 인터페이스로 클래스를 정의하는 경우, implements 키워드를 사용합니다.

```ts
interface classTest {
    name: string,
    sayHello(): string,
    changeName(name: string): void
}

class User implements classTest {
    constructor(public name: string) {
        this.name = name;
    }
    sayHello() {
        return `${this.name} hello!`;
    }
    changeName(name: string) {
        this.name = name;
    }
}

const teemo = new User('Teemo');
console.log(teemo.sayHello());
teemo.changeName('teemo')
console.log(teemo.sayHello());
```

# 인덱싱 가능 타입(Indexable types)
> 인터페이스 IItem은 인덱스 시그니처를 가지고 있으며, 그 IItem을 타입(인터페이스)으로 하는 item이 있고,<br>
> 그 item을 item[0]이나 item[1]과 같이 숫자로 인덱싱할 때 반환되는 값은 'a'나 b' 같은 문자여야 합니다.

```ts
interface IItem {
  [itemIndex: number]: string // Index signature
}
let item: IItem = ['a', 'b', 'c']; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
console.log(item['0']); // Error - TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
```

> 유니온 타입을 하면 아래와 같이 할 수 있음

```ts
interface IItem {
  [i: number]: string | boolean | number[]
}
let item: IItem = ['Hello', false, [1, 2, 3]];
console.log(item[0]); // Hello
console.log(item[1]); // false
console.log(item[2]); // [1, 2, 3]
```

> 인덱스 시그니처를 사용하면 다음 예제와 같이 인터페이스에 정의되지 않은 속성들을 사용할 때 유용합니다.<br>
> 단, 해당 속성이 인덱스 시그니처에 정의된 반환 값을 가져야 함에 주의해야 합니다.

```ts
interface IUser {
  [userProp: string]: string | number
  name: string,
  age: number,
  test: boolean // error ts(2411)
}
let user: IUser = {
  name: 'Neo',
  age: 123,
  email: 'thesecon@gmail.com',
  isAdult: true // Error - TS2322: Type 'true' is not assignable to type 'string | number'.
};
console.log(user['name']); // 'Neo'
console.log(user['age']); // 123
console.log(user['email']); // thesecon@gmail.com
```

# keyof

> 인덱싱 가능 타입에서 keyof를 사용하면 속성 이름을 타입으로 사용할 수 있습니다.<br>
> 인덱싱 가능 타입의 속성 이름들이 유니온 타입으로 적용됩니다.

```ts
interface ICountries {
  KR: '대한민국',
  US: '미국',
  CP: '중국'
}
let country: keyof ICountries; // 'KR' | 'US' | 'CP'
country = 'KR'; // ok
country = 'RU'; // Error - TS2322: Type '"RU"' is not assignable to type '"KR" | "US" | "CP"'.
```

> 또는 keyof를 통한 인덱싱으로 타입의 개별 값에도 접근할 수 있습니다.

```ts
interface ICountries {
  KR: '대한민국',
  US: '미국',
  CP: '중국'
}
let country: ICountries[keyof ICountries]; // ICountries['KR' | 'US' | 'CP']
country = '대한민국';
country = '러시아'; // Error - TS2322: Type '"러시아"' is not assignable to type '"대한민국" | "미국" | "중국"'.
```

# 인터페이스 확장

> 인터페이스도 클래스처럼 extends 키워드를 활용해 상속할 수 있습니다.

```ts
interface IAnimal {
  name: string
}
interface ICat extends IAnimal {
  meow(): string
}

class Cat implements ICat { // Error - TS2420: Class 'Cat' incorrectly implements interface 'ICat'. Property 'name' is missing in type 'Cat' but required in type 'ICat'.
  meow() {
    return 'MEOW~'
  }
}
```

> 기존에 있던 인터페이스에 내용을 추가할 때 유용합니다.

```ts
interface IAnimal {
  name: string
}
interface ICat extends IAnimal {
  meow(): string
}

class Cat implements ICat { // Error - TS2420: Class 'Cat' incorrectly implements interface 'ICat'. Property 'name' is missing in type 'Cat' but required in type 'ICat'.
  meow() {
    return 'MEOW~'
  }
}
```

# 타입 별칭(Type Aliases)

> type 키워드를 사용해 새로운 타입 조합을 만들 수 있습니다.<br>
> 일반적인 경우 둘 이상의 조합으로 구성하기 위해 유니온을 많이 사용합니다.  

```ts
type MyType = string;
type YourType = string | number | boolean;
type TUser = {
  name: string,
  age: number,
  isValid: boolean
} | [string, number, boolean];

let userA: TUser = {
  name: 'Neo',
  age: 85,
  isValid: true
};
let userB: TUser = ['Evan', 36, false];

function someFunc(arg: MyType): YourType {
  switch (arg) {
    case 's':
      return arg.toString(); // string
    case 'n':
      return parseInt(arg); // number
    default:
      return true; // boolean
  }
}
```

# 제네릭(Generic)

> Generic은 재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, `사용 시점에 타입을 선언`할 수 있는 방법을 제공합니다.

> 아래 예제는 `a`, `b`를 배열로 반환해 주는 함수인데 만약 문자가 들어오면 에러가 나게 됩니다.

```ts
function toArray(a: number, b: number): number[] {
  return [a, b];
}
toArray(1, 2);
toArray('1', '2'); // Error - TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
```

> 조금 더 범용적으로 만들기 위해 유니언 방식을 사용했습니다.<br>
> 이제 String 타입을 인수로 받을 수 있지만, 가독성이 떨어지고 새로운 문제도 발생했습니다.<br>
> 세 번째 호출을 보면 의도치 않게 Number와 String 타입을 동시에 받을 수 있게 되었습니다.

```ts
function toArray(a: number | string, b: number | string): (number | string)[] {
  return [a, b];
}
toArray(1, 2); // Only Number
toArray('1', '2'); // Only String
toArray(1, '2'); // Number & String
```

> 이번에는 Generic을 사용합니다.<br>
> 함수 이름 우측에 <T>를 작성해 시작합니다.<br>
> T는 타입 변수로 사용자가 제공한 타입으로 변환될 식별자입니다.

```ts
function toArray<T>(a: T, b: T): T[] {
  return [a, b];
}

toArray<number>(1, 2);
toArray<string>('1', '2');
toArray<string | number>(1, '2');
toArray<number>(1, '2'); // Error
```

# 제약 조건

> 아래 코드는 별도의 제약 조건이 없어서 모든 타입이 허용됩니다.

```ts
interface MyType<T> {
  name: string,
  value: T
}

const dataA: MyType<string> = {
  name: 'Data A',
  value: 'Hello world'
};
const dataB: MyType<number> = {
  name: 'Data B',
  value: 1234
};
const dataC: MyType<boolean> = {
  name: 'Data C',
  value: true
};
const dataD: MyType<number[]> = {
  name: 'Data D',
  value: [1, 2, 3, 4]
};
```

> 만약 타입 변수 T가 string과 number인 경우만 허용하려면 아래 예제와 같이 `extends` 키워드를 사용하는 제약 조건을 추가할 수 있습니다.

```ts
interface MyType<T extends string | number> {
  name: string,
  value: T
}

const dataA: MyType<string> = {
  name: 'Data A',
  value: 'Hello world'
};
const dataB: MyType<number> = {
  name: 'Data B',
  value: 1234
};
const dataC: MyType<boolean> = { // TS2344: Type 'boolean' does not satisfy the constraint 'string | number'.
  name: 'Data C',
  value: true
};
const dataD: MyType<number[]> = { // TS2344: Type 'number[]' does not satisfy the constraint 'string | number'.
  name: 'Data D',
  value: [1, 2, 3, 4]
};
```

# 조건부 타입(Conditional Types)

> `extends`는 삼항 연산자를 사용할 수 있습니다.

```ts
type U = string | number | boolean;

// type 식별자 = 타입 구현
type MyType<T> = T extends U ? string : never;

// interface 식별자 { 타입 구현 }
interface IUser<T> {
  name: string,
  age: T extends U ? number : never
}
```

> 다음과 같이 삼항 연산자를 연속해서 사용할 수도 있습니다.

```ts
type MyType<T> =
  T extends string ? 'Str' :
  T extends number ? 'Num' :
  T extends boolean ? 'Boo' :
  T extends undefined ? 'Und' :
  T extends null ? 'Nul' :
  'Obj';
```

# infer

> `infer` 키워드를 사용해 타입 변수의 타입 추론 여부를 확인할 수 있습니다.<br>
> 기본 문법은 다음과 같습니다.

> U가 추론 가능한 타입이면 참, 아니면 거짓

```ts
T extends infer U ? X : Y
```

> 기본 구조는 위에서 살펴본 조건부 타입과 같습니다.

```ts
type MyType<T> = T extends infer R ? R : null;

const a: MyType<number> = 123;
```

> `MyType<number>`에서 받은 타입 `number`가 되고 `infer` 키워드를 통해 타입 추론이 가능한지 확인합니다.<br>
> 만약 추론이 불가능 하면 null이 되겠지만 지금은 추론이 가능하기 때문에 변수 a는 123을 할당하게 됩니다.

> 너무 어려우니 여기까지


# Overloads

> 이름은 같지만 매개변수 타입과 반환 타입이 다른 여러 함수를 가질 수 있는 것을 말합니다.

```ts
function add(a: string, b: string): string; // 함수 선언
function add(a: number, b: number): number; // 함수 선언
function add(a: any, b: any): any { // 함수 구현
  return a + b;
}

add('hello ', 'world~');
add(1, 2);
add('hello ', 2); // Error - No overload matches this call.
```

> 인터페이스나 타입 별칭 등의 메소드 정의에서도 오버로드를 활용할 수 있습니다.
> 타입 단언이나 타입 가드를 통해 함수 선언부의 동적인 매개변수와 반환 값을 정의할 수 있습니다.

```ts
interface IUser {
  name: string,
  age: number,
  getData(x: string): string[];
  getData(x: number): string;
}

let user: IUser = {
  name: 'Neo',
  age: 36,
  getData: (data: any) => {
    if (typeof data === 'string') {
      return data.split('');
    } else {
      return data.toString();
    }
  }
};

user.getData('Hello'); // ['h', 'e', 'l', 'l', 'o']
user.getData(123); // '123'
```

# class

> 클래스의 생성자 메소드(constructor)와 일반 메소드(Methods)와는 다르게,<br>
> 속성(Properties)은 `name: string;`와 같이 클래스 바디에 별도로 타입을 선언합니다.

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}
let cat: Cat;
cat = new Cat('Lucy');
console.log(cat.getName()); // Cat name is Lucy.
```

# Modifiers

> 클래스 멤버(속성, 메소드)에서 사용할 수 있는 접근 제어자(Access Modifiers)들이 있습니다.

접근 제어자|의미|범위
---|---|---
public|어디서나 자유롭게 접근 가능(생략 가능)|속성, 메소드
protected|나와 파생된 후손 클래스 내에서 접근 가능|속성, 메소드
private|내 클래스에서만 접근 가능|속성, 메소드

다음 수식어들은 위 접근 제어자와 함께 사용할 수 있습니다.
`static`의 경우 타입스크립트에서는 정적 메소드뿐만 아니라 정적 속성도 사용할 수 있습니다.

```ts
class Animal {
  // public 수식어 사용(생략 가능)
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}
let cat = new Cat('Lucy');
console.log(cat.getName()); // Cat name is Lucy.

cat.name = 'Tiger';
console.log(cat.getName()); // Cat name is Tiger.
```

> `Animal` 클래스의 `name` 속성은 protected이기 때문에 파생된 자식 클래스(Cat)에서 `this.name`으로 참조할 수는 있지만,<br>
> 인스턴스에서 `cat.name`으로는 접근할 수 없습니다.

```ts
class Animal {
  // protected 수식어 사용
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}
let cat = new Cat('Lucy');
console.log(cat.getName()); // Cat name is Lucy.
console.log(cat.name); // Error - TS2445: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.

cat.name = 'Tiger'; // Error - TS2445: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
console.log(cat.getName());
```

> `Animal` 클래스의 `name` 속성은 `private`이기 때문에 파생된 자식 클래스(Cat)에서 `this.name`으로 참조할 수 없고,<br>
> 인스턴스에서도 `cat.name`으로 접근할 수도 없습니다.

```ts
class Animal {
  // private 수식어 사용
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`; // Error - TS2341: Property 'name' is private and only accessible within class 'Animal'
  }
}
let cat = new Cat('Lucy');
console.log(cat.getName());
console.log(cat.name); // Error - TS2341: Property 'name' is private and only accessible within class 'Animal'.

cat.name = 'Tiger'; // Error - TS2341: Property 'name' is private and only accessible within class 'Animal'.
console.log(cat.getName());
```

> 생성자 메소드에서 인수 타입 선언과 동시에 접근 제어자를 사용하면 바로 속성 멤버로 정의할 수 있습니다.

```ts
class Cat {
  constructor(public name: string, protected age: number) {}
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const cat = new Cat('Neo', 2);
console.log(cat.getName()); // Neo
console.log(cat.getAge()); // 2
```

> `static`으로 정적 메소드만 생성할 수 있었는데, 타입스크립트에서는 정적 속성도 생성할 수 있습니다.<br>
> 정적 속성은 클래스 바디에서 속성의 타입 선언과 같이 사용하며, 정적 메소드와 다르게 클래스 바디에서 값을 초기화할 수 없기 때문에<br>
> `constructor` 혹은 메소드에서 초기화가 필요합니다.

```ts
class Cat {
  static legs: number;
  constructor() {
    Cat.legs = 4; // Init static property.
  }
}
console.log(Cat.legs); // undefined
new Cat();
console.log(Cat.legs); // 4

class Dog {
  // Init static method.
  static getLegs() {
    return 4;
  }
}
console.log(Dog.getLegs()); // 4
```

> readonly을 사용하면 해당 속성은 ‘읽기 전용’입니다.<br>
> 그리고 static과 readonly는 접근 제어자와 같이 사용할 수 있습니다.

```ts
class Animal {
  readonly name: string;
  constructor(n: string) {
    this.name = n;
  }
}
let dog = new Animal('Charlie');
console.log(dog.name); // Charlie
dog.name = 'Tiger'; // Error - TS2540: Cannot assign to 'name' because it is a read-only property.
```

# Abstract

> 추상(Abstract) 클래스는 다른 클래스가 파생될 수 있는 기본 클래스로, 인터페이스와 굉장히 유사합니다.<br>
> abstract는 클래스뿐만 아니라 속성과 메소드에도 사용할 수 있습니다.<br>
> 추상 클래스는 직접 인스턴스를 생성할 수 없기 때문에 파생된 후손 클래스에서 인스턴스를 생성해야 합니다.

```ts
// Abstract Class
abstract class Animal {
  abstract name: string; // 파생된 클래스에서 구현해야 합니다.
  abstract getName(): string; // 파생된 클래스에서 구현해야 합니다.
}
class Cat extends Animal {
  constructor(public name: string) {
    super();
  }
  getName() {
    return this.name;
  }
}

new Animal(); // Error - TS2511: Cannot create an instance of an abstract class.
const cat = new Cat('Lucy');
console.log(cat.getName()); // Lucy

// Interface
interface IAnimal {
  name: string;
  getName(): string;
}
class Dog implements IAnimal {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}
```

> 추상 클래스가 인터페이스와 다른 점은 `속성이나 메소드 멤버에 대한 세부 구현이 가능`하다는 점입니다.

```ts
abstract class Animal {
  abstract name: string;
  abstract getName(): string;
  // Abstract class constructor can be made protected.
  protected constructor(public legs: string) {}
  getLegs() {
    return this.legs
  }
}
```

# Optional

> 지금부터는 Optional에 대해서 설명할 건데 대충 개념을 설명하자면<br>
> `?`라는 키워드를 사용해 선택적으로 하는 것을 말합니다.

# Parameters

> 타입을 선언할 때 선택적 매개 변수(Optional Parameter)를 지정할 수 있습니다.<br>
다음 예제를 보면 `?` 키워드를 사용해 `y`를 `선택적 매개 변수`로 지정했습니다.<br>
따라서 `y`가 받을 `인수가 없어도 에러가 발생하지 않습니다.`<br>

```ts
function add(x: number, y?: number): number {
  return x + (y || 0);
}
const sum = add(2);
console.log(sum);
```

> 위 예제는 정확히 다음 예제와 같습니다.<br>
> 즉, `?` 키워드 사용은 `| undefined`를 추가하는 것과 같습니다.

```ts
function add(x: number, y: number | undefined): number {
  return x + (y || 0);
}
const sum = add(2, undefined);
console.log(sum);
```

# 속성과 매소드

> `?` 키워드를 속성(Properties)과 메소드(Methods) 타입 선언에도 사용할 수 있습니다.

```ts
interface IUser {
  name: string,
  age: number,
  isAdult?: boolean
}

let user1: IUser = {
  name: 'Neo',
  age: 123,
  isAdult: true
};

let user2: IUser = { // error 가 발생하지 않음
  name: 'Evan',
  age: 456
};
```

> type이나 class에도 사용 가능

```ts
interface IUser {
  name: string,
  age: number,
  isAdult?: boolean,
  validate?(): boolean
}
type TUser = {
  name: string,
  age: number,
  isAdult?: boolean,
  validate?(): boolean
}
abstract class CUser {
  abstract name: string;
  abstract age: number;
  abstract isAdult?: boolean;
  abstract validate?(): boolean;
}
```

# 체이닝

> str 속성이 undefined일 경우 toString 메소드를 사용할 수 없기 때문에 에러가 발생합니다.<br>
> str 속성이 문자열이라는 것을 단언하면 문제를 해결할 수 있지만,<br>
> 더 간단하게 선택적 체이닝(Optional Chaining) 연산자 ?.를 사용할 수 있습니다.

```ts
function toString(str: string | undefined) {
  return str.toString();
}

// Type Assertion
function toString(str: string | undefined) {
  return (str as string).toString();
}

// Optional Chaining
function toString(str: string | undefined) {
  return str?.toString();
}
```

> 특히 && 연산자를 사용해 각 속성을 Nullish 체크(null이나 undefined를 확인)하는 부분에서 유용합니다.

```ts
// Before
if (foo && foo.bar && foo.bar.baz) {}

// After-ish
if (foo?.bar?.baz) {}
```

# Nullish 병합 연산자

> 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고,<br>
> 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

```ts
const foo = null ?? 'Hello nullish.';
console.log(foo); // Hello nullish.

const bar = false ?? true;
console.log(bar); // false

const baz = 0 ?? 12;
console.log(baz); // 0
```

# export import

> 타입스크립트는 일반적인 변수나 함수, 클래스뿐만 아니라 다음과 같이 인터페이스나 타입 별칭도 모듈로 내보낼 수 있습니다.<br>
> 자바스크립트는 `esm` 이라는 모듈을 설치해야 `import`를 사용할 수 있다

```ts
// myTypes.ts

// 인터페이스 내보내기
export interface IUser {
  name: string,
  age: number
}

// 타입 별칭 내보내기
export type MyType = string | number;
```
```ts
// 선언한 모듈(myTypes.ts) 가져오기
import { IUser, MyType } from './myTypes';

const user: IUser = {
  name: 'HEROPY',
  age: 85
};

const something: MyType = true; // Error - TS2322: Type 'true' is not assignable to type 'MyType'.
```

# 모듈의 타입 선언

```
npm install lodash
```

```ts
import * as _ from 'lodash'; // Error - TS2307: Cannot find module 'lodash'.

console.log(_.camelCase('import lodash module'));
```

> 모듈 구현(implement)과 타입 선언(declaration)이 동시에 이뤄지는 타입스크립트와 달리,<br>
> 구현만 존재하는 자바스크립트 모듈(E.g. Lodash)을 사용하는 경우, 컴파일러가 이해할 수 있는 모듈의 타입 선언이 필요하며,<br>
> 이를 대부분 .d.ts파일로 만들어 제공하게 됩니다.

> 루트 경로에 lodash.d.ts 파일을 생성합니다.

> 모듈 가져오기(`Import`)가 가능하도록 `module` 키워드를 사용해 모듈 이름을 명시합니다.<br>
> 그리고 그 범위 안에서, 타입(`interface`)을 가진 변수(`_`)를 선언하고 내보내기(`Export`)만 하면 됩니다.

> 타입스크립트 컴파일러가 이해할 수 있도록 declare 키워드를 통해 선언해야 합니다

```ts
// lodash.d.ts

// 모듈의 타입 선언(Ambient module declaration)
declare module 'lodash' {
  // 1. 타입(인터페이스) 선언
  interface ILodash {
    camelCase(str?: string): string
  }

  // 2. 타입(인터페이스)을 가지는 변수 선언
  const _: ILodash;

  // 3. 내보내기(CommonJS)
  export = _;
}
```

여기까지