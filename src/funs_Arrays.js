// functions in TypeScript
var array = [1, 2, 3, 4, 5, 6];
var element = 0;
function newFunction() {
    var value;
    for (var index = 0; index < array.length; index++) {
        var element_1 = array[index];
        value = element_1 + 1;
        console.log(element_1);
    }
    return element;
}
console.log(newFunction());
var TV1 = {
    Name: 'tv',
    price1: 34999,
    stock: true,
    print: function () {
        console.log("Name ".concat(this.Name, "\n price ").concat(this.price1));
    }
};
TV1.print();
