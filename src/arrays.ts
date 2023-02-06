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
