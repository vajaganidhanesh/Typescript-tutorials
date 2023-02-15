var Database = /** @class */ (function () {
  function Database() {
    this.ConnectString = null;
  }
  Database.prototype.Connect = function () {
    for (var property in this.ConnectString) {
      console.log(
        "".concat(property, " : ").concat(this.ConnectString[property])
      );
    }
  };
  return Database;
})();
var oracle = new Database();
oracle.ConnectString = {
  UserName: "dhanesh",
  Password: "tiger",
  Database: "studentDB",
};
oracle.Connect();
