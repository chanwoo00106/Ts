# function Type

js의 함수와 다른점은 파라미터 부분에 타입을 지정하고 리턴하는 부분에 타입을 지정한다는 것 입니다.

리턴값에 타입은 `함수명()` 옆에 적으면 됩니다

```ts
function func(x:number):number{
    return x * 2;
}
```

여기서는 void 타입이 있는데<br>
이것은 알다시피 아무것도 받지 않겠다는 것입니다

```ts
function func2(x :number) :void { 
  return x * 2 //여기서 에러남 
} 
```

만약 파라미터를 넣을 수도 있고 하지 않을 수도 있다면 아래와 같이 파라미터명 옆에 `?`를 적어주시면 됩니다
이렇게 하지 않으면 에러가 납니다.

```ts
function func3(x? :number) { 

}
func3(); //가능
func3(2); //가능
```

함수에도 UnionType이 있는데<br>
아래와 같이 작성하면 에러가 납니다.<br>
이유는 타입스크립트에선 변수의 타입이 number | string 이런 union type인 경우 자료 조작을 금지시킵니다.<br>
아직 이 파라미터의 타입이 확실하지 않으니까 파라미터 조작을 일단 실드로 막고 금지하는 것입니다.

```ts
function count(x :number | string){ 
  return x + 1 
} 
```

아래도 마찬가지 입니다.
x라는 파라미터가 뭔지 확실하지 않기 때문에 에러를 줍니다.

```ts
function func4(x? :number) :number { 
  return x * 2 
}  
```