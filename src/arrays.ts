let arr11: any[] = [1, true, "value"];
console.log(arr11);

// objects in Typescript
let TV = {
  nameTv: "Samsung HD",
  price: 2300,
};

// we can configure nullable property in object
let TvNumber:{Company:string | number,PriceCompany:Number} = {
    Company:'Panasonic',
    PriceCompany:23000
}
console.log(TvNumber.Company)

// storing objects of arrays
let students:{Name:string, age:number}[]=[
  {"Name":"dhanesh","age":23},
  {"Name":"vajagani","age":24}
]

// storing array of objects
let students1 : [{Values:Number},{Values:Number}] = [
  {Values:32},
  {Values:43}
]

console.log(students1[0].Values);

let date:Date = new Date();
console.log(date.toLocaleDateString());

// let maps:Map<any,any> = new Map();
// maps.set('val1',21)

// console.log(maps);
