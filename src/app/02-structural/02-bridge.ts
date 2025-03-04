interface Ability {
  use: () => void;
}

class SwordAttack implements Ability {
  public use(): void {
    console.log('Attack with a sword');
  }
}

class MagicSpell implements Ability {
  public use(): void {
    console.log('Spell a magic trick');
  }
}

class AxeAttack implements Ability {
  public use(): void {
    console.log('Attack with an axe');
  }
}

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  public setAbility(ability: Ability): void {
    this.ability = ability;
  }

  public abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log('The warrior is ready to fight');
    this.ability.use();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log('The mage is ready to use the magic');
    this.ability.use();
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();
  warrior.setAbility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new MagicSpell());
  mage.performAbility();
}

main();
