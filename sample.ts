interface IItem {
    [i: number]: string // Index signature
}
let item: IItem = ['a', 'b', 'c']; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.

interface IUser {
    [userProp: string]: string | number
    name: string,
    age: number
}