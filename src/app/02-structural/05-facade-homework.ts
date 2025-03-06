class CPU {
  public stopOperations(): void {
    console.log('CPU: Stopping operations.');
  }

  public jump(position: number): void {
    console.log(`CPU: Juming to the next memory position ${position}.`);
  }

  public execute(): void {
    console.log('CPU: Executing statements.');
  }
}

class HardDrive {
  public read(position: number, size: number): string {
    console.log(`HardDrive: Reading ${size} bytes from the next position: ${position}.`);
    return '001010001010100';
  }

  public close() {
    console.log('HardDrive: Stopping hard disk.');
  }
}

class Memory {
  public load(position: number, data: string): void {
    console.log(`Memory: Loading data from the position ${position}: ${data}.`);
  }

  public free(): void {
    console.log('Memory: Freeing memory up.');
  }
}

class ComputerFacade {
  private cpu: CPU;
  private hardDrive: HardDrive;
  private memory: Memory;

  constructor() {
    this.cpu = new CPU();
    this.hardDrive = new HardDrive();
    this.memory = new Memory();
  }

  startComputer(): void {
    console.log('Turning computer on...');
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
    console.log('Computer is ready to use.\n');
  }

  shutDownComputer(): void {
    console.log('Turning computer off...');
    console.log('Closing processes and saving data...');
    this.cpu.stopOperations();
    this.memory.free();
    this.hardDrive.close();
    console.log('Computer was turned off.\n');
  }
}

function main() {
  const computer = new ComputerFacade();
  computer.startComputer();
  computer.shutDownComputer();
}

main();
