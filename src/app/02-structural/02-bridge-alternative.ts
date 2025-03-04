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
  protected channels: NotificationChannel[];

  constructor(channels: NotificationChannel[]) {
    this.channels = channels;
  }

  public abstract notify(message: string): void;

  public addChannel(channel: NotificationChannel): void {
    this.channels.push(channel);
  }
}

class AlertNotification extends Notification {
  override notify(message: string): void {
    console.log('Alert notification:');
    this.channels.forEach((channel) => channel.send(message));
  }
}

function main() {
  const channels = [
    new EmailChannel(),
    new SMSChannel(),
    new PushNotificationChannel(),
    new PushNotificationChannel(),
    new PushNotificationChannel(),
  ];
  const alert = new AlertNotification(channels);
  alert.notify('Non-authorized access.');
}

main();
