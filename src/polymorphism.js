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
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = "";
        this.lastName = "";
        this.Designation = "";
    }
    Employee.prototype.print = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.Designation));
        document.write("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.Designation));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Dhanesh";
        _this.lastName = "vajagani";
        _this.Designation = "Developer";
        _this.Role = "Developer role : Build, Debug, Test, Deploy";
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.Role);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "Dhani";
        _this.lastName = "vajagani";
        _this.Designation = "Adminstrator";
        _this.Role = "Adminstrator role : Authentication ";
        return _this;
    }
    Admin.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.Role);
    };
    return Admin;
}(Employee));
var Mannager = /** @class */ (function (_super) {
    __extends(Mannager, _super);
    function Mannager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = "vajgani";
        _this.lastName = "Dhanesh";
        _this.Designation = "Manager";
        _this.Role = "Manager role : approvels ";
        return _this;
    }
    Mannager.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write(this.Role);
    };
    return Mannager;
}(Employee));
var employee = [new Developer(), new Admin(), new Mannager()];
