class Pokemon {
  public name: string;
  public type: string;
  public level: number;
  public attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = attacks;
  }

  clone(): Pokemon {
    return new Pokemon(this.name, this.type, this.level, [...this.attacks]);
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}\nType: ${this.type}\nLevel: ${this.level}\nAttacks: ${this.attacks.join(', ')}\n`);
  }
}

function main() {
  const basePokemon = new Pokemon('Charmander', 'Fire', 1, ['Power 1', 'Power 2']);
  const clone1 = basePokemon.clone();
  clone1.name = 'Charmeleon';
  clone1.level = 16;
  clone1.attacks.push('Power 3');
  basePokemon.displayInfo();
  clone1.displayInfo();
}

main();
