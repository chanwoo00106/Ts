# React ts

react ts 초기 세팅

```npx create-react-app <appname> --template=typescript```

react ts는 컴포넌트의 확장자가 `*.tsx`를 사용한다.

아래와 같이 세로운 컴포넌트를 만들어 보자

```ts
import React from 'react';

type GreetingsProps = {
  name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div>Hello, {name}</div>
);

export default Greetings;
```

