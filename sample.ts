class Animal {
  // public 수식어 사용(생략 가능)
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Cat extends Animal {
  getName(): string {
    return `Cat name is ${this.name}.`;
  }
}
let cat = new Cat('Lucy');
console.log(cat.getName()); // Cat name is Lucy.

cat.name = 'Tiger';
console.log(cat.getName()); // Cat name is Tiger.