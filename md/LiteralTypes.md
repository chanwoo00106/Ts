# Literal Types

string, number 이런 것만 타입이 될 수 있는게 아니고<br>
일반 글자같은 것도 타입이 될 수 있다 

```ts
let name:'Teemo';
name = 'Teemo'
name = 'bad' // error
```

대신 위와 같이 하면 name의 값에는 Teemo만 올 수 있다

아니면 or 기호를 사용해서 둘중에 하나만 올 수 이게 할 수 있다

```ts
let teemo :'cute'|'veryCute';
teemo = 'veryCute';
```

함수도 똑같다

```ts
function func(a : 'teemo') : 1 | 0 | -1 {
  return 1
}
```