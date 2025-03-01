class SecondLogger {
  constructor() {}

  public info(msg: string): void {
    console.log(msg);
  }

  public warn(msg: string): void {
    console.log(msg);
  }

  public error(msg: string): void {
    console.log(msg);
  }
}

interface ILoggerAdapter {
  file: string;
  writeLog: (msg: string) => void;
  writeWarning: (msg: string) => void;
  writeError: (msg: string) => void;
}

export class LoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new SecondLogger();

  constructor(file: string) {
    this.file = file;
  }

  public writeLog(msg: string): void {
    this.logger.info(`[${this.file} log] ${msg}`);
  }

  public writeWarning(msg: string): void {
    this.logger.warn(`[${this.file} warning] ${msg}`);
  }

  public writeError(msg: string): void {
    this.logger.error(`[${this.file} error] ${msg}`);
  }
}
