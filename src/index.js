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
// conditon based variables or union of types
// we can select mutiple datatypes as variable types
var nameval = 'er';
nameval = 32;
console.log(nameval);
