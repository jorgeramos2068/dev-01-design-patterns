interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Cooking a chicken hamburger');
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Cooking a beef hamburger');
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Cooking a bean hamburger');
  }
}

abstract class HamburgerFactory {
  protected abstract createHamburger(): Hamburger;

  order(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenHamburgerFactory extends HamburgerFactory {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefHamburgerFactory extends HamburgerFactory {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanHamburgerFactory extends HamburgerFactory {
  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: HamburgerFactory;
  const burgerType = prompt('What type of hamburger do you want (chicken/beef/bean)?');
  switch (burgerType) {
    case 'chicken':
      restaurant = new ChickenHamburgerFactory();
      break;
    case 'beef':
      restaurant = new BeefHamburgerFactory();
      break;
    case 'bean':
      restaurant = new BeanHamburgerFactory();
      break;
    default:
      throw new Error('Invalid option');
  }
  restaurant.order();
}

main();
