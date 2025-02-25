class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.connected) {
      this.connected = true;
      console.log('DB connection open');
      return;
    }
    console.log('Already connected');
  }

  public disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log('DB connection closed');
      return;
    }
    console.log('Already disconnected');
  }
}

function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();

  const db2 = DatabaseConnection.getInstance();
  db2.connect();

  console.log('Equal:', db1 === db2);
  db1.disconnect();
  db1.disconnect();
  db2.connect();
}

main();
