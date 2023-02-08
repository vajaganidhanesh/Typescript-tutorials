// functions in TypeScript

let array: number[] = [1, 2, 3, 4, 5, 6];
const element: number = 0;
function newFunction(): number {
    let value:number;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        value = element + 1;
        console.log(element);
    }
    return element;
}

console.log(newFunction());

interface product{
    Name:string;
    price1:number;
    stock?:boolean;
    print():void
}

const TV1:product={
    Name:'tv',
    price1:34999,
    stock:true,
    print:function (){
        console.log(`Name ${this.Name}\n price ${this.price1}`);
    }
}

TV1.print()
