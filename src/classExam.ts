// class Declaration consists of constant data we can't edit
class calculations{
   methods():number{
    return 0;
   }
}

// class Expression comprises of numbers,which can change to state and situation
var secondClass = class {

}

let definder = 22

if(definder === 22){
    secondClass = class{
        data:String | number = "value"
    }
}
else{    secondClass = class{
        data1 = ''
    }
}

// string convertors 
var num = "23";
console.log(parseInt(num));


class Product1{
    public Name:string = "";
    public Price:number = 23;
    public Customer:{Rating:number,Count:number}={
        Rating:234,
        Count:324
    }
    get productRating(){
        return this.Customer.Rating
    }
}
let pd = new Product1;
console.log(pd.productRating);
