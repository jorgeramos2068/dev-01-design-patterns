class Projector {
  public turnOn(): void {
    console.log('Projector is turned on');
  }

  public turnOff(): void {
    console.log('Projector is turned off');
  }
}

class SoundSystem {
  public on(): void {
    console.log('Sound system is on');
  }

  public off(): void {
    console.log('Sound system is off');
  }
}

class VideoPlayer {
  public on(): void {
    console.log('Video player is on');
  }

  public play(movie: string): void {
    console.log(`Playing ${movie}`);
  }

  public stop(): void {
    console.log('Movie stopped');
  }

  public off(): void {
    console.log('Video player is off');
  }
}

class PopcornMaker {
  public poppingPopcorn() {
    console.log('Popping popcorn');
  }

  public turnOffPoppingPopcorn() {
    console.log('Turning off popping popcorn');
  }
}

interface HomeTheaterFacadeOptions {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcoronMaker: PopcornMaker;
}

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcoronMaker: PopcornMaker;

  constructor({ projector, soundSystem, videoPlayer, popcoronMaker }: HomeTheaterFacadeOptions) {
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcoronMaker = popcoronMaker;
  }

  public watchMovie(movie: string): void {
    console.log('Preparing the movie');
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcoronMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);
    console.log('Enjoy the movie!\n');
  }

  public endWatchingMovie(): void {
    console.log('Preparing to stop the movie');
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcoronMaker.turnOffPoppingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off();
    console.log('System turned off\n');
  }
}

function main() {
  const homeTheater = new HomeTheaterFacade({
    projector: new Projector(),
    soundSystem: new SoundSystem(),
    videoPlayer: new VideoPlayer(),
    popcoronMaker: new PopcornMaker(),
  });
  homeTheater.watchMovie('Avengers');
  homeTheater.endWatchingMovie();
}

main();
