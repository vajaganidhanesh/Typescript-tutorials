// class Declaration consists of constant data we can't edit
var calculations = /** @class */ (function () {
    function calculations() {
    }
    calculations.prototype.methods = function () {
        return 0;
    };
    return calculations;
}());
// class Expression comprises of numbers,which can change to state and situation
var secondClass = /** @class */ (function () {
    function secondClass() {
    }
    return secondClass;
}());
var definder = 22;
if (definder === 22) {
    secondClass = /** @class */ (function () {
        function class_1() {
            this.data = "value";
        }
        return class_1;
    }());
}
else {
    secondClass = /** @class */ (function () {
        function class_2() {
            this.data1 = '';
        }
        return class_2;
    }());
}
// string convertors 
var num = "23";
console.log(parseInt(num));
