interface Hamburger {
  prepare: () => void;
}

interface Drink {
  pour: () => void;
}

class ChickenHamburger implements Hamburger {
  public prepare(): void {
    console.log('Cooking a chicken hamburger');
  }
}

class BeefHamburger implements Hamburger {
  public prepare(): void {
    console.log('Cooking a beef hamburger');
  }
}

class Water implements Drink {
  public pour(): void {
    console.log('Glass of water');
  }
}

class Soda implements Drink {
  public pour(): void {
    console.log('Glass of soda');
  }
}

interface RestaurantFactory {
  createHamburger: () => Hamburger;
  createDrink: () => Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  public createHamburger = (): Hamburger => {
    return new BeefHamburger();
  };

  public createDrink = (): Drink => {
    return new Soda();
  };
}

class HealthyRestaurantFactory implements RestaurantFactory {
  public createHamburger = (): Hamburger => {
    return new ChickenHamburger();
  };

  public createDrink = (): Drink => {
    return new Water();
  };
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburger();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

main(new FastFoodRestaurantFactory());
main(new HealthyRestaurantFactory());
