class Computer {
  public cpu: string = 'not-defined';
  public ram: string = 'not-defined';
  public storage: string = 'not-defined';
  public gpu?: string = 'not-defined';

  public displayConfiguration() {
    console.log('Configuration:');
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`GPU: ${this.gpu ?? 'Not defined'}\n`);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU('Intel')
    .setRAM('2GB')
    .setStorage('100GB')
    .setGPU('Nvidia')
    .build();
  basicComputer.displayConfiguration();

  const gamerComputer: Computer = new ComputerBuilder()
    .setCPU('Intel')
    .setRAM('250GB')
    .setStorage('1TB')
    .setGPU('Nvidia')
    .build();
  gamerComputer.displayConfiguration();
}

main();
