"use strict";
var a = 123;
var u = 123;
var v1 = a; // 모든 타입(any)은 어디든 할당할 수 있습니다.
// let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없습니다.
var v3 = u; // OK!
var v4 = u; // 타입을 단언하면 할당할 수 있습니다.
