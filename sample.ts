interface func {
    (name: string): string
}

const sayHello: func = (n) => {
    return `${n} hello!`;
}

console.log(sayHello('Teemo'))