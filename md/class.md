# class

class는 js와 많이 비슷하지만 타입을 지정해 줘야 한다

아래와 같은 건 그냥 타입을 지정하지 않아도 number가 되기 때문에<br>
굳이 지정해 줄 필요가 없다.<br>
굳이 하고 싶다면 일반 변수처럼 하면 된다.

```js
class Person {
  data = 0;
}

const a = new Person();
console.log(a.data)// 0
```

constroctor(생성자)는 this.변수명 안에 값을 넣어주면 됐지만 여기서는 에러가 난다.<br>
this.변수명에 값을 넣고 싶으면 미리 필드값으로 만들어 줘야 한다

```js
// 이건 에러
// class Person {
//     constroctor() {
//         this.name = 'Teemo';
//         this.age = 17;
//     }
// }

class Person {
    name;
    age;
    constroctor(a:string) { // or 기본값을 주면 파라미터에 값을 입력 안하면 자동으로 할당해줌 ex) a = 'Teemo'
        this.name = a;
        this.age = 17;
    }
}
```

## methods 타입 지정

함수명(){} 이렇게 넣으면 Person이라는 클래스의 prototype에 추가된다.<br>
타입지정도 함수랑 같다 파라미터 & return의 타입을 자유롭게 할 수 있음


```ts
class Person {
  
  add(num){
    console.log(num + 1)
  }
}
```
