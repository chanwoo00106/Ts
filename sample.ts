function add(x: number, y?: number): number {
    return x + (y || 0);
}
const sum = add(2);
console.log(sum);