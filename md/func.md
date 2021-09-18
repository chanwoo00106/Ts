# function(함수)

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

