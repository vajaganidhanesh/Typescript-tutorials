var username = prompt('enter name');
var role = prompt('enter your role', 'admin|manager|customer');
var productname = prompt("Enter Product Name");
var Product = /** @class */ (function () {
    function Product() {
        this._productName = null;
    }
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            if (role === "admin") {
                this._productName = newName;
            }
            else {
                document.write("Hello ! ".concat(username, " your role ").concat(role, " is not set ").concat(productname));
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var tv = new Product();
tv.ProductName = productname;
if (tv.ProductName) {
    document.write('Product Name : ' + tv.ProductName);
}
