interface MenuElement {
  showDetails(indent?: string): void;
}

class MenuItem implements MenuElement {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}- ${this.name}: $${this.price.toFixed(2)}`);
  }
}

class MenuCategory implements MenuElement {
  private name: string;
  private elements: MenuElement[];

  constructor(name: string) {
    this.name = name;
    this.elements = [];
  }

  add(element: MenuElement | MenuElement[]): void {
    if (Array.isArray(element)) {
      element.forEach((item) => this.elements.push(item));
    } else {
      this.elements.push(element);
    }
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}+ ${this.name}`);
    this.elements.forEach((element) => element.showDetails(`${indent} `));
  }
}

function main() {
  // Individual items
  const salad = new MenuItem('Salad', 5.99);
  const soup = new MenuItem('Tomato soup', 4.99);
  const steak = new MenuItem('Beef steack', 15.99);
  const soda = new MenuItem('Soda', 2.5);
  const dessert = new MenuItem('Chocolate cake', 6.5);
  const coffee = new MenuItem('Coffee', 1.99);

  // Menu categories
  const appetizers = new MenuCategory('Appetizers');
  appetizers.add(salad);
  appetizers.add(soup);

  const mainCourse = new MenuCategory('Main course');
  mainCourse.add(steak);

  const beverages = new MenuCategory('Beverages');
  beverages.add(soda);
  beverages.add(coffee);

  const desserts = new MenuCategory('Desserts');
  desserts.add(dessert);

  // Main menu
  const mainMenu = new MenuCategory('Main menu');
  mainMenu.add([appetizers, beverages, desserts, mainCourse]);

  mainMenu.showDetails();
}

main();
