// Type Interence is based on the value initalized not assigned
var x = 10;
console.log(x);
var value = 10;
// concat expression
var name1 = 'dhanesh';
var name2 = 'be ready for chellenges!';
var motto = "Hello ! ".concat(name1, " ").concat(name2);
console.log(motto);
// regex expressions for mobile
var number = '+919657312345';
if (number.match(/\+91[0-9]{10}/)) {
    console.log('otp send');
}
else {
    console.log("Invalid number");
}
// conditon based variables or union of typescript
// we can select mutiple datatypes as variable types
var nameval = 'er';
nameval = 32;
console.log(nameval);
// Example with undefined union of typescript
var firstName = "samsung Tv";
var price;
if (price) {
    console.log("Name = ".concat(firstName, "\nPrice = ").concat(price));
}
else {
    console.log("Name = ".concat(firstName, "\n"));
}
// array formation in typescript
// union of types and by meta character
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['dhanesh'];
var arr3;
arr3 = ['d', 'h', 'a', 'n', 'e', 's', 'h'];
for (var index = 0; index < arr3.length; index++) {
    var element = arr3[index];
    console.table(element);
}
