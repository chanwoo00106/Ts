interface IUser {
  name: string,
  age: number,
  getData(x: string): string[];
  getData(x: number): string;
}

let user: IUser = {
  name: 'Neo',
  age: 36,
  getData: (data: any) => {
    if (typeof data === 'string') {
      return data.split('');
    } else {
      return data.toString();
    }
  }
};
  
user.getData('Hello'); // ['h', 'e', 'l', 'l', 'o']
user.getData(123); // '123'
