const func = (a: number, b: number): number => a + b;

function funcT(a: number, b: number): number {
    return a + b;
}

console.log(func(1, 2));
console.log(funcT(1, 2));

//===================================

const funcP = (): void => {
    console.log('Teemo!');
};

function funcPT(): void {
    console.log('Teemo!');
}

funcP();
funcPT();