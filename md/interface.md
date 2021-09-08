# interface

interface는 type과 같이 타입을 변수로 저장해서 사용하는 것이다.<br>
단 obj에만 사용이 가능하다

```ts
interface Any {
    color: string,
    width: number
}

const a :Any = {color: 'white', width: 100}
```

interface와 type의 차이점은
1. 방금 말했던 것 처럼 obj에만 사용이 가능하다
2. interface는 상속같은 기능이 있다
3. 이름 중복 선언이 가능하다


상속같은 기능을 사용하려면 extends를 사용하면 된다

```ts
interface Any {
    color: string
}

interface Any2 extends Any {
    width: number
}
const a :Any2 = {color: 'white', width: 100}
```

type에도 같은 기능이 있는데 느낌이 약간 다르다<br>
interface도 아래와 같이 할 수 있음

```ts
type Animal = { 
  name :string 
} 
type Cat = Animal & { legs: number }
```

interface의 진짜 장점은 중복 선언이다<br>
위의 코드를 잠깐 가져오자면 사실 extends는 필요없었고<br>
그냥 같은 이름이면 자동으로 color와 width의 타입을 얻을 수 있다<br>
이건 type의 경우 에러가 남

```ts
interface Any {
    color: string
}

interface Any {
    width: number
}
const a :Any = {color: 'white', width: 100}
```

하지만 extends 할 때 안에 속성이 중복이 되면 안된다.

```ts
interface Any {
    name: string
}

interface Any2 extends Any {
    name: number // error
}
```

interface에서 함수의 타입을 지정할 때는 아래와 같이 하면 된다.

```ts
interface MathObj {
  plus : (a:number, b:number) => number,
  minus : (a:number, b:number) => number
}

let obj :MathObj = {
  plus(a,b){
    return a + b
  },
  minus(a,b){
    return a - b
  }
} 
```