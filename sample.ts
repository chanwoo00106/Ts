type MyType<T> = T extends infer R ? R : null;

const a: MyType<number> = 123;