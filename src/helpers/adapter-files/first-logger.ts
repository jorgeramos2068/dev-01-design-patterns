export class FirstLogger {
  constructor(private file: string) {}

  public writeLog(msg: string): void {
    console.log(`[${this.file} log] ${msg}`);
  }

  public writeWarning(msg: string): void {
    console.log(`[${this.file} warning] ${msg}`);
  }

  public writeError(msg: string): void {
    console.log(`[${this.file} error] ${msg}`);
  }
}
