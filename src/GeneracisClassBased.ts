interface IOracle {
  UserName: string;
  Password: number | string;
  Database: string;
}
interface IMysql {
  Host: string;
  user: string;
  pwd: string;
  Db: string;
}
interface IMongoDB {
  Url: string;
}

class Database<T> {
  public ConnectString: T | null = null;
  public Connect(): void {
    for (var property in this.ConnectString) {
      console.log(`${property} : ${this.ConnectString[property]}`);
    }
  }
}

let oracle = new Database<IOracle>();
oracle.ConnectString = {
  UserName: "dhanesh",
  Password: "tiger",
  Database: "studentDB",
};

oracle.Connect();
