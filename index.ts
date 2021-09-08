class Car {
    model;
    price;
    constructor(model:string, price:number){
        this.model = model;
        this.price = price;
    }

    tax() {
        return  this.price / 10;
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300


class Word {
    str;
    num;
    constructor(...param){
        let nums:number[] =[];
        let strs:string[] =[];

        param.forEach(i => {
            if (typeof i === 'number') nums.push(i);
            else strs.push(i);
        });

        this.num = nums;
        this.str = strs;
    }
}


let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']