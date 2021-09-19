# Typescript를 배우는 곳

아래와 같이 터미널에 명령어를 치면 `tsconfig.json` 파일이 자동으로 생성된다.

```
tsc --init
```

아래 명령어를 터미널에 치면 알아서 js파일로 변환됨

```
tsc -w
```


tsconfig.json 파일에 적는 것들
```json
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 }
}
```

전부 잊어서 다시 시작!!

- [타입 지정](anything.md#타입-지정)
- [타입 에러](anything.md#타입-에러)
- [Boolean](anything.md#Boolean)
- [Number](anything.md#Number)
- [String](anything.md#String)
- [Array](anything.md#Array)
- [Tuple](anything.md#Tuple)
- [Enum](anything.md#Enum)
- [Any](anything.md#Any)
- [Unknown](anything.md#Unknown)
- [Object](anything.md#Object)
- [Null과 Undefined](anything.md#Null과-Undefined)
- [Void](anything.md#Void)
- [Naver](anything.md#Naver)
- [Union](anything.md#Union)
- [Intersection](anything.md#Intersection)
- [function](anything.md#function)
- [Inference](anything.md#Inference)
- [Assertions](anything.md#Assertions)
- [Non-null 단언 연산자](anything.md#Non-null-단언-연산자)
- [타입 가드(Guards)](anything.md#타입-가드(Guards))
- [읽기 전용 속성(Readonly properties)](anything.md#읽기-전용-속성(Readonly-properties))
- [함수 타입](anything.md#함수-타입)
- [클래스 타입](anything.md#클래스-타입)
- [인덱싱 가능 타입](anything.md#인덱싱-가능-타입(Indexable-types))
- [keyof](anything.md#keyof)
- [인터페이스 확장](anything.md#인터페이스-확장)
- [타입 별칭](anything.md#타입-별칭(Type-Aliases))
- [제네릭](anything.md#제네릭(Generic))