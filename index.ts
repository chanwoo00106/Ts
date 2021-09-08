function func2(x :number | string){
    if (typeof x === 'number') {
      return x + 1
    } 
    else if (typeof x === 'string') {
      return x + 1
    }
    else {
      return 0
    }
}
console.log(func2('hello')); // hello1