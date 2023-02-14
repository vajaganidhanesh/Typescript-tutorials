class Demo {
  public Print<T>(a: T, b: T) {
    console.log(a, b);
  }
}
let obj = new Demo();
obj.Print<number>(12, 20);
obj.Print<String>("hello", "world!...");

interface iProduct {
  Product: string;
  Price: number;
}

interface Empolyee {
  Name: string;
  Designation: string;
  Salary: number;
}

class Details {
  public PrintDetails<T>(data: T) {
    for (var property in data) {
      console.log(`${property} : ${data[property]}`);
    }
  }
}

let obj1 = new Details();
obj1.PrintDetails<Empolyee>({
  Name: "Dhanesh",
  Designation: "developer",
  Salary: 30000,
});
