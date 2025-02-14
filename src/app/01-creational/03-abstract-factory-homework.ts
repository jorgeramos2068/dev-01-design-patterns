interface Vehicle {
  assemble: () => void;
}

interface Engine {
  start: () => void;
}

class ElectricCar implements Vehicle {
  public assemble() {
    console.log('Assembling an electric car');
  }
}

class GasCar implements Vehicle {
  public assemble() {
    console.log('Assembling a gas car');
  }
}

class ElectricEngine implements Engine {
  public start() {
    console.log('Running an electric engine');
  }
}

class GasEngine implements Engine {
  public start() {
    console.log('Running a gas engine');
  }
}

interface VehicleFactory {
  createVehicle: () => Vehicle;
  createEngine: () => Engine;
}

class ElectricVehicleFactory implements VehicleFactory {
  public createVehicle() {
    return new ElectricCar();
  }

  public createEngine() {
    return new ElectricEngine();
  }
}

class GasVehicleFactory implements VehicleFactory {
  public createVehicle() {
    return new GasCar();
  }

  public createEngine() {
    return new GasEngine();
  }
}

function main(factory: VehicleFactory) {
  const vehicle = factory.createVehicle();
  const engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

console.log('Creating an electric vehicle:');
main(new ElectricVehicleFactory());

console.log('\nCreating a gas vehicle:');
main(new GasVehicleFactory());
