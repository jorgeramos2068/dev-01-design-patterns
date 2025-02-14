interface Hamburguer {
  prepare: () => void;
}

interface Drink {
  pour: () => void;
}

class ChickenHamburguer implements Hamburguer {
  public prepare(): void {
    console.log('Cooking a chicken hamburguer');
  }
}

class BeefHamburguer implements Hamburguer {
  public prepare(): void {
    console.log('Cooking a beef hamburguer');
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
  createHamburguer: () => Hamburguer;
  createDrink: () => Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  public createHamburguer = (): Hamburguer => {
    return new BeefHamburguer();
  };

  public createDrink = (): Drink => {
    return new Soda();
  };
}

class HealthyRestaurantFactory implements RestaurantFactory {
  public createHamburguer = (): Hamburguer => {
    return new ChickenHamburguer();
  };

  public createDrink = (): Drink => {
    return new Water();
  };
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburguer();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

main(new FastFoodRestaurantFactory());
main(new HealthyRestaurantFactory());
