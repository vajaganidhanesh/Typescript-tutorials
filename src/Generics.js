var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Print = function (a, b) {
        console.log(a, b);
    };
    return Demo;
}());
var obj = new Demo();
obj.Print(12, 20);
obj.Print('hello', 'world!...');
var Details = /** @class */ (function () {
    function Details() {
    }
    Details.prototype.PrintDetails = function (data) {
        for (var property in data) {
            console.log("".concat(property, " : ").concat(data[property]));
        }
    };
    return Details;
}());
var obj1 = new Details();
obj1.PrintDetails({ Name: 'Dhanesh', Designation: 'developer', Salary: 30000 });
