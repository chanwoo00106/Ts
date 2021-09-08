# Type Assertion

타입을 간편하게 assert 할 수도 있습니다.<br>
변수명 as string<br>
이런 식으로 as라는 키워드 쓰면 됩니다.

```ts
function func(x :number | string){ 
    return (x as number) + 1 
}
console.log( func(123) )
```

이러면 컴파일러도 x라는 변수의 타입이 number라고 생각하고 연산을 합니다<br>
하지만 이렇게 작성하려면 저 파라미터 타입이 number라는 것을 알아야한다.<br>
만약 저 함수에 문자열이 들어가면 에러는 뜨지 않고 그냥 문자열로 합쳐져서 나온다<br>
```ts
// 예
function func(x :number | string){ 
    return (x as number) + 1 
}
console.log(func('123')) // 1231
```

as는 그냥 잠깐동안 엄격한 타입체크기능을 안쓰겠다는 뜻과 동일하기 때문에<br>
조금더 정확한 코드를 짤 때는 narrowing을 쓰는게 맞다.

