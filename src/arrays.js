var arr11 = [1, true, "value"];
console.log(arr11);
// objects in Typescript
var TV = {
    nameTv: "Samsung HD",
    price: 2300
};
// we can configure nullable property in object
var TvNumber = {
    Company: 'Panasonic',
    PriceCompany: 23000
};
console.log(TvNumber.Company);
// storing objects of arrays
var students = [
    { "Name": "dhanesh", "age": 23 },
    { "Name": "vajagani", "age": 24 }
];
// storing array of objects
var students1 = [
    { Values: 32 },
    { Values: 43 }
];
console.log(students1[0].Values);
