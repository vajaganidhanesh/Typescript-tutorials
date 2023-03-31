class Employee {
  public firstName: string = "";
  public lastName: string = "";
  public Designation: string = "";
  public print(): void {
    console.log(`${this.firstName} ${this.lastName} ${this.Designation}`);

    document.write(`${this.firstName} ${this.lastName} ${this.Designation}`);
  }
}

class Developer extends Employee {
  firstName: string = "Dhanesh";
  lastName: string = "vajagani";
  Designation: string = "Developer";
  Role = "Developer role : Build, Debug, Test, Deploy";
  print() {
    super.print();
    document.write(this.Role);
  }
}

class Admin extends Employee {
  firstName: string = "Dhani";
  lastName: string = "vajagani";
  Designation: string = "Adminstrator";
  Role = "Adminstrator role : Authentication ";
  print() {
    super.print();
    document.write(this.Role);
  }
}

class Mannager extends Employee {
  firstName: string = "vajgani";
  lastName: string = "Dhanesh";
  Designation: string = "Manager";
  Role = "Manager role : approvels ";
  print() {
    super.print();
    document.write(this.Role);
  }
}

let employee: Employee[] = [new Developer(), new Admin(), new Mannager()];

console.log(employee);
