"use strict";
function someFunc(val, isNumber) {
    // some logics
    if (isNumber) {
        // 1. 변수 as 타입
        val.toFixed(2);
        // Or
        // 2. <타입>변수
        // (<number>val).toFixed(2);
    }
}
