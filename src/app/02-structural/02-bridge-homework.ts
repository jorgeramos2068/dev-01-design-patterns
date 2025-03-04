interface NotificationChannel {
  send: (message: string) => void;
}

class EmailChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotificationChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`Sending push: ${message}`);
  }
}

abstract class Notification {
  protected channel: NotificationChannel;

  constructor(channel: NotificationChannel) {
    this.channel = channel;
  }

  public abstract notify(message: string): void;

  public setChannel(channel: NotificationChannel): void {
    this.channel = channel;
  }
}

class AlertNotification extends Notification {
  override notify(message: string): void {
    console.log('Alert notification:');
    this.channel.send(message);
  }
}

class ReminderNotification extends Notification {
  override notify(message: string): void {
    console.log('Reminder notification:');
    this.channel.send(message);
  }
}

class PushNotification extends Notification {
  override notify(message: string): void {
    console.log('Push notification:');
    this.channel.send(message);
  }
}

function main() {
  const alert = new AlertNotification(new EmailChannel());
  alert.notify('Security alert: Non-authorized access.');

  // Cambiar el canal a SMS y volver a enviar la alerta
  alert.setChannel(new SMSChannel());
  alert.notify('Security alert: Non-authorized access.');

  // Crear una notificación de recordatorio usando el canal de SMS
  const reminder = new ReminderNotification(new SMSChannel());
  reminder.notify('Reminder: Your medical appointment is tomorrow at 10:00 am.');

  // Cambiar el canal de recordatorio a correo electrónico y enviar nuevamente
  reminder.setChannel(new PushNotificationChannel());
  reminder.notify('Reminder: Your medical appointment is tomorrow at 10:00 am.');

  // Crear una notificación de push usando el canal de notificación push
  const push = new PushNotification(new PushNotificationChannel());
  push.notify('New update available. Click to install.');
}

main();
