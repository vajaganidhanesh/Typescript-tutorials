enum Interface {
  value1 = 22,
  value2,
  value3,
  value4,
}

console.log(Interface);

// String formation auto implementation is not possible
enum StringExpression {
  NotFoung = "Page not Found",
  //   Notfound,
  ok = 33,
  val,
}

// console.log(StringExpression);

// Expressions in Enum
enum Expressions {
  a = 10,
  b = 20,
  c = a + b,
}

console.log(Expressions.c);
