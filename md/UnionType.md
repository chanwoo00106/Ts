# Union type

변수에 뭐가 들어올지 애매하다면 Union type을 사용하면 된다

```ts
let name: string | number = 'Teemo';
let age: (string | number) = 17; // 괄호 쳐도 됨
```

array, object 자료 만들 때 union type 을 쓰려면 아래와 같이 하면 된다

```ts
var array: (number | string)[] = [1,'2',3]
var obj: {data : (number | string) } = { data : '123' }
```

any 라는 타입도 있는데

```ts
let name: any = 'kim';
name = 123;
name = undefined;
name = [];
```

any 타입은 타입을 마구 바꿔도 에러가 나지 않는다.<br>
마구 쓰면 에러를 찾기 힘들기 때문에 쓰지 않는게 좋음

또 unknown라는 타입이 있는데<br>
any와 똑같이 모든 타입을 집어넣을 수 있다.

```ts
let name: unknown = 'kim';
name = 123;
name = undefined;
name = [];
```

unknown는 any와 같이 모든 자료 다 집어넣을 수 있지만<br>
nuknown는 자료를 집어넣어도 타입은 그대로 unknown입니다.<br>
또 unknown 타입을 다른 곳에 집어넣으려고 하면 에러가 난다 (any는 안남)<br>
아래와 같이 해도 any는 나지 않지만 unknown는 남

```ts
let name: unknown;
name[0];
name - 1;
name.data;
```

아래와 같이 하면 에러가 난다

```ts
let age: string|number;
age + 1;
```