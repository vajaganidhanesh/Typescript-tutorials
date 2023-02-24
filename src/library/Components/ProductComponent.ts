import { ProductTemplate } from "../templates/ProductTemplate";

export class ProductComponent extends ProductTemplate {
  Name = "Samsung Tv";
  Price = 40000.33;
  Qty = 2;
  CategoryName = "Electronics";
  Total() {
    return this.Qty * this.Price;
  }
  Print() {
    console.log(
      `Name=${this.Name}\nPrice=${this.Price}\nCategory${
        this.CategoryName
      }\nTotal${this.Print()}`
    );
  }
}
