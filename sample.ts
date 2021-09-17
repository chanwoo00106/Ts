interface IUser {
    name: string,
    age: number,
    email: string
}

let userA: IUser = {
    name: 'Hyung woo',
    age: 123,
    email: 'ilovejs@js.com'
};

let userB: IUser = {
    name: 'anything',
    // age: false, // Error
};