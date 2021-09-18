function fnE(x: number | null | undefined) {
    return x!.toFixed(2);
}

console.log(fnE(10));