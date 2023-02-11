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
var TV1 = {
    Name: 'tv',
    price1: 34999,
    stock: true,
    print: function () {
        // console.log(`Name ${this.Name}\n price ${this.price1}`);
    }
};
TV1.print();
var calculation = {
    adding: 5,
    subtracting: 7,
    multiplication: 5,
    correctStmt: true
};
var users = [
    {
        name: "John Doe",
        age: 17
    },
    {
        name: "Elon Doe",
        age: 27
    },
    {
        name: "Alex Doe",
        age: 14
    }
];
users.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});
console.log(users);
