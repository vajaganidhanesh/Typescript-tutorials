interface ProductContract {
  Name: string;
  Price: number;
  Qtg: number;
  Total(): number;
  Print(): void;
}

abstract class ProductTemplate implements ProductContract {
  public Name: string = "";
  public Price: number = 0;
  public Qtg: number = 0;
  public abstract Total(): number;
  public abstract Print(): void;
}

class ProductComponent extends ProductTemplate {
  Name = "samsung tv";
  Price = 33599;
  Qtg = 15;
  Total() {
    return this.Qtg * this.Price;
  }
  public Print(): void {
    console.log(
      `Name = ${this.Name}\n Price = ${this.Price}/-\n Qtg = ${
        this.Qtg
      }\n Total = ${this.Total()}`
    );
  }
}

let tv1 = new ProductComponent();
tv1.Print();
