interface Character {
  getDescription: () => string;
  getStats: () => { attack: number; defense: number };
}

class BasicCharacter implements Character {
  public getDescription(): string {
    return 'Basic character';
  }

  public getStats(): { attack: number; defense: number } {
    return {
      attack: 10,
      defense: 10,
    };
  }
}

abstract class CharacterDecorator implements Character {
  protected character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  public getDescription(): string {
    return this.character.getDescription();
  }

  public getStats(): { attack: number; defense: number } {
    return this.character.getStats();
  }
}

class HelmetDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return this.character.getDescription() + '\n * with Helmet';
  }

  public override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 5 };
  }
}

class ShieldDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return this.character.getDescription() + '\n * with Shield';
  }

  public override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 10 };
  }
}

class SwordDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return this.character.getDescription() + '\n * with Sword';
  }

  public override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 7, defense: stats.defense };
  }
}

class RingDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return this.character.getDescription() + '\n * with Ring';
  }

  public override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 3, defense: stats.defense };
  }
}

function main() {
  let character: Character = new BasicCharacter();
  console.log('\nInitial character:', character.getDescription());
  console.log('Statistics:', character.getStats());

  character = new HelmetDecorator(character);
  console.log('\nWith Helmet:', character.getDescription());
  console.log('Statistics:', character.getStats());

  character = new ShieldDecorator(character);
  console.log('\nWith Shield:', character.getDescription());
  console.log('Statistics:', character.getStats());

  character = new SwordDecorator(character);
  console.log('\nWith Sword:', character.getDescription());
  console.log('Statistics:', character.getStats());

  character = new RingDecorator(character);
  console.log('\nWith Ring:', character.getDescription());
  console.log('Statistics:', character.getStats());

  console.log('\n\n');
}

main();
