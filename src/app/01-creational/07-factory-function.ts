type Language = 'es' | 'en' | 'fr';

function createGreeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: `Hola ${name}`,
      en: `Hello ${name}`,
      fr: `Bonjour ${name}`,
    };
    console.log(messages[lang]);
  };
}

function main() {
  const spanishGreeter = createGreeter('es');
  spanishGreeter('Fernando');

  const englishGreeter = createGreeter('en');
  englishGreeter('John');

  const frenchGreeter = createGreeter('fr');
  frenchGreeter('Pierre');
}

main();
