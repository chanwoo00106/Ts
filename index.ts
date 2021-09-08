function func(x :number | string){ 
    return (x as number) + 1 
}
console.log( func('ㅇㄹㄴ') )