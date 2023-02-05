// Type Interence is based on the value initalized not assigned
var x = 10;
console.log(x);

let value:Number = 10;

// concat expression

let name1:string = 'dhanesh'
let name2:string = 'be ready for chellenges!'

let motto:string = `Hello ! ${name1} ${name2}`
console.log(motto);

// regex expressions for mobile
let number:string = '+919657312345'
if(number.match(/\+91[0-9]{10}/)){
    console.log('otp send');   
}
else{ 
    console.log("Invalid number");
}

// conditon based variables or union of types
// we can select mutiple datatypes as variable types
var nameval:string | Number = 'er'
nameval = 32

console.log(nameval);
