class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
    }
    return DragonBalls.instance;
  }

  public collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`Ball collected. Total: ${this.ballsCollected}`);
      return;
    }
    console.log('7 balls collected');
  }

  public callShenlong(): void {
    if (this.ballsCollected === 7) {
      console.log('Ask for your wish!');
      this.ballsCollected = 0;
      return;
    }
    console.log(`You still need ${7 - this.ballsCollected} balls`);
  }
}

function main() {
  const gokuBalls = DragonBalls.getInstance();
  gokuBalls.collectBall();
  gokuBalls.collectBall();
  gokuBalls.collectBall();
  gokuBalls.callShenlong();

  const vegettaBalls = DragonBalls.getInstance();
  vegettaBalls.collectBall();
  vegettaBalls.collectBall();
  vegettaBalls.collectBall();
  vegettaBalls.collectBall();

  gokuBalls.callShenlong();
}

main();
