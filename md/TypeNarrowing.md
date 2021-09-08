# Type Narrowing

전에 배웠던 대로 하면 아래 코드는 에러가 난다

```ts
function func(x :number | string){
   return x + 1  //에러남 
}
```

하지만 if문 등으로 타입 특정 타입일 때 특정 코드만 실행하게 할 수 있다

```ts
function func2(x :number | string){
  if (typeof x === 'number') {
    return x + 1
  } 
  else if (typeof x === 'string') {
    return x + 1
  }
  else {
    return 0
  }
}
```

꼭 typeof를 쓸 필요는 없고 타입을 하나로 확정지을 수 있는 코드라면 어떤 것도 Narrowing 역할을 할 수 있다.<br>
in, instanceof 키워드도 사용가능하다.

