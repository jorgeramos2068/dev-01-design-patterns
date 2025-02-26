function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Función fábrica que crea un manejador de logs
type LogLevel = 'info' | 'warn' | 'error';

function createLogger(level: LogLevel) {
  return function (message: string) {
    console.log(`[${level.toUpperCase()}:${formatDate(new Date())}] ${message}`);
  };
}

// Ejemplo de uso
function main() {
  const infoLogger = createLogger('info');
  const warnLogger = createLogger('warn');
  const errorLogger = createLogger('error');

  infoLogger('Application started correctly.');
  warnLogger('High use of memory.');
  errorLogger('Database connection error.');
}

main();
