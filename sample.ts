interface classTest {
    name: string,
    sayHello(): string,
    changeName(name: string): void
}

class User implements classTest {
    constructor(public name: string) {
        this.name = name;
    }
    sayHello() {
        return `${this.name} hello!`;
    }
    changeName(name: string) {
        this.name = name;
    }
}

const teemo = new User('Teemo');
console.log(teemo.sayHello());
teemo.changeName('teemo')
console.log(teemo.sayHello());