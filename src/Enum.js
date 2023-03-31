var Interface;
(function (Interface) {
    Interface[Interface["value1"] = 22] = "value1";
    Interface[Interface["value2"] = 23] = "value2";
    Interface[Interface["value3"] = 24] = "value3";
    Interface[Interface["value4"] = 25] = "value4";
})(Interface || (Interface = {}));
console.log(Interface);
// String formation auto implementation is not possible
var StringExpression;
(function (StringExpression) {
    StringExpression["NotFoung"] = "Page not Found";
    //   Notfound,
    StringExpression[StringExpression["ok"] = 33] = "ok";
    StringExpression[StringExpression["val"] = 34] = "val";
})(StringExpression || (StringExpression = {}));
// console.log(StringExpression);
// Expressions in Enum
var Expressions;
(function (Expressions) {
    Expressions[Expressions["a"] = 10] = "a";
    Expressions[Expressions["b"] = 20] = "b";
    Expressions[Expressions["c"] = 30] = "c";
})(Expressions || (Expressions = {}));
console.log(Expressions.c);
