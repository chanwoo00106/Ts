# React ts

react ts 초기 세팅

```npx create-react-app <appname> --template=typescript```

react ts는 컴포넌트의 확장자가 `*.tsx`를 사용한다.

아래와 같이 세로운 컴포넌트를 만들어 보자

```ts
// src/Greetings.tsx
import React from 'react';

type GreetingsProps = {
  name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Greetings;
```

여기서 `React.FC`라는게 있는데 이건 Functional Component의 약자로 저 꺽쇠 사이에 `type`이나 `interface`를 넣어 props의 타입을 넣어준다<br>
이걸 사용하면 이점이 있는데 첫 번째는 props에 기본적으로 `children`이 들어가 있다<br>
두번째는 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다.

하지만 단점 역시 존재 하는데 `React.FC` 를 사용하면 기본적으로는 이에 대한 처리를 제대로 못하게 된다<br>
만약에 하고 싶다면 결국 Props 타입 안에 `children` 을 설정해야한다.

```ts
type GreetingsProps = {
  name: string;
  children: React.ReactNode;
};
```

그리고, React.FC는 (아직까지는) defaultProps 가 제대로 작동하지 않습니다. 예를 들어서 코드를 다음과 같이 작성했다고 가정해봅시다.

```ts
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

그리고 이걸 렌더링 하면

```ts
import React from 'react';
import './App.css';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <Greetings />
    </div>
  );
}

export default App;
```

`<Greetings />` 이 부분에서 에러가 나는데 반면 `React.FC`를 생략하면 잘 작동을 한다.<br>
이러한 이슈 때문에 이걸 쓰지 말라고 하기도 한다. 물론 나도 안 쓰는게 편하다고 생각한다.

만약 화살표 함수도 안쓰면 아래와 같은 형태가 될 것이다

```ts
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

