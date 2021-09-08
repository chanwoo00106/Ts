# Type Aliases

코드를 짜다보면 아래와 같이 매우 길게 타입을 작성할 때가 있다.

```ts
let 동물 :string | number | undefined;
```

이걸 쓰는게 귀찮고 보기 싫으면 변수에 담아 쓰면 된다<br>
그리고 이걸 type alias라고 한다

```ts
type Animal = string | number | undefined;
let dog :Animal;
```

object type도 저장이 가능하다

```ts
type human = {
  name : string,
  age : number,
}

let teacher :human = { name : 'john', age : 20 } 
```

하지만 미래에 내가 봤을 때 알아먹지 못 할 수 있기 때문에 좋은 코드는 아닌것 같다.

# readonly

```ts
const country = 'gangjin'; 
country = 'maryang'; //const 변수는 여기서 에러남 
```

이 변하지 않는 변수를 만들고 싶을 때 const 쓰면 된다.

```ts
const any = {
  name : 'teemo'
}
any.name = 'cute';  //const 변수지만 에러안남
```

하지만 object 자료를 const에 집어넣어도 object 내부는 마음대로 변경가능하다.<br>
이걸 해결하기 위해 타입스크립트 문법을 쓰는데<br>
readonly 키워드는 속성 왼쪽에 붙일 수 있으며<br>
특정 속성을 변경불가능하게 잠궈준다.

```ts
type name = {
  readonly name : string,
}

let teemo :name = {
  name : 'Teemo'
}

teemo.name = 'bad teemo' //readonly라서 에러남
```

타입을 합칠 수 있다

```ts
type Name = string;
type Age = number;
type NewOne = Name | Age; 
```

object에 지정한 타입의 경우 extend 할 수 있다.

```ts
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let XY :XandY = { x : 1, y : 2 }
```

마지막으로 type을 재정의 할 수는 없다.

```ts
type Name = string;
type Name = number; // error
```