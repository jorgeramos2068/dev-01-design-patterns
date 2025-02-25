class Player {
  readonly name: string;
  readonly score: number;
  readonly level: number;

  constructor(name: string, score: number, level: number) {
    this.name = name;
    this.score = score;
    this.level = level;
  }

  copyWith({ name, score, level }: Partial<Player>): Player {
    return new Player(name ?? this.name, score ?? this.score, level ?? this.level);
  }

  display(): void {
    console.log(`Player: ${this.name}`);
    console.log(`Score: ${this.score}`);
    console.log(`Level: ${this.level}`);
  }
}

function main() {
  // Initial player
  let player = new Player('John', 0, 1);
  console.log('Initial state:');
  player.display();

  // Incrementar el puntaje
  player = player.copyWith({ score: 10 });
  console.log('\nAfter incrementing the score:');
  player.display();

  // Increase level
  player = player.copyWith({ level: 2 });
  console.log('\nAfter increasing level:');
  player.display();

  // Change player name
  player = player.copyWith({ name: 'John Pro' });
  console.log('\nAfter changing the name:');
  player.display();
}

main();
