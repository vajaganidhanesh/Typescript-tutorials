var username: string | null = prompt("enter name");
var role: string | null = prompt("enter your role", "admin|manager|customer");
var productname: string | null = prompt("Enter Product Name");

class Product {
  public _productName: string | null = null;

  get ProductName() {
    return this._productName;
  }
  set ProductName(newName: string | null) {
    if (role === "admin") {
      this._productName = newName;
    } else {
      document.write(
        `Hello ! ${username} your role ${role} is not set ${productname}`
      );
    }
  }
}

let tv = new Product();
tv.ProductName = productname;
if (tv.ProductName) {
  document.write("Product Name : " + tv.ProductName);
}
