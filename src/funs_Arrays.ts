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

// console.log(newFunction());

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
        // console.log(`Name ${this.Name}\n price ${this.price1}`);
    }
}

TV1.print()

interface feature1 {
    adding:number
    subtracting:number
}

interface feature2 extends feature1{
    multiplication : number;
    correctStmt : true;
}

let calculation:feature2 = {
    adding : 5,
    subtracting : 7,
    multiplication : 5,
    correctStmt : true
}

let users = [
    {
      name: "John Doe",
      age: 17
    },
    {
      name: "Elon Doe",
      age: 27
    },
    {
      name: "Alex Doe",
      age: 14
    }
  ];

  users.sort((a,b)=>{
    if(a.name > b.name){
        return 1
    }
    if(a.name < b.name){
        return -1
    }
    return 0
  })

  console.log(users);
  