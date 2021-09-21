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

값을 받아도 되고 안 받아도 되는 props가 있다면 `?`사용하면 된다.

만약 이 컴포넌트에서 특정 함수를 props 로 받아와야 한다면 다음과 같이 타입을 지정 할 수 있다

```ts
// Greeting.tsx
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```
```ts
// App.tsx
import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
```

typescript로 useState를 하면 타입을 정해줘도 되고 안해도 된다<br>
처음에 숫자 또는 문자열 같은걸 넣어주면 알아서 타입을 추론해 준다

```ts
const [count, setCount] = useState(0);
// 또는
const [count, setCount] = useState<number>(0);
```

## react ts 로 counter 만들기

```ts
// src/Counter.tsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

어느 정도 느낌이 왔다 하면 2개 이상의 input 상태도 관리 해보고 하면 된다.