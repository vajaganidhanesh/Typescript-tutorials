var arr11 = [1, true, "value"];
console.log(arr11);
var refer = new Array(1, 3);
// objects in Typescript
var TV = {
    nameTv: "Samsung HD",
    price: 2300
};
// we can configure nullable property in object
var TvNumber = {
    Company: "Panasonic",
    PriceCompany: 23000
};
var keys = Object.keys(TvNumber)[1];
var values = Object.assign(TvNumber);
console.log(keys);
console.log(TvNumber.Company);
// storing objects of arrays
var students = [
    { Name: "dhanesh", age: 23 },
    { Name: "vajagani", age: 24 },
];
// storing array of objects
var students1 = [
    { Values: 32 },
    { Values: 43 },
];
console.log(students1[0].Values);
var date = new Date();
console.log(date.toLocaleDateString());
var maps = new Map();
maps.set("val1", 21);
// let da = maps.get("val");
var mapData = maps.entries(arr11);
console.log(mapData);
