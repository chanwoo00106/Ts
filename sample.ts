abstract class Animal {
    abstract name: string; // 파생된 클래스에서 구현해야 합니다.
    abstract getName(): string; // 파생된 클래스에서 구현해야 합니다.
}
class Cat extends Animal {
    constructor(public name: string) {
        super();
    }
    getName() {
        return this.name;
    }
}

// new Animal(); // Error - TS2511: Cannot create an instance of an abstract class.
const cat = new Cat('Lucy');
console.log(cat.getName()); // Lucy

// Interface
interface IAnimal {
    name: string;
    getName(): string;
}
class Dog implements IAnimal {
    constructor(public name: string) { }
    getName() {
        return this.name;
    }
}