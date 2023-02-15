var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
        this.Name = "";
        this.Price = 0;
        this.Qtg = 0;
    }
    return ProductTemplate;
}());
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "samsung tv";
        _this.Price = 33599;
        _this.Qtg = 15;
        return _this;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qtg * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        console.log("Name = ".concat(this.Name, "\n Price = ").concat(this.Price, "/-\n Qtg = ").concat(this.Qtg, "\n Total = ").concat(this.Total()));
    };
    return ProductComponent;
}(ProductTemplate));
var tv1 = new ProductComponent();
tv1.Print();
