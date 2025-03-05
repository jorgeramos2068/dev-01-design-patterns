interface Notification {
  send: (message: string) => void;
}

class BasicNotification implements Notification {
  public send(message: string): void {
    console.log(`Sending basic notification: ${message}`);
  }
}

// Decorators
abstract class NotificationDecorator implements Notification {
  protected notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  public send(message: string): void {
    this.notification.send(message);
  }
}

class EmailDecorator extends NotificationDecorator {
  override send(message: string): void {
    super.send(message);
    this.sendEmail(message);
  }

  private sendEmail(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }
}

class SMSDecorator extends NotificationDecorator {
  public override send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }

  private sendSMS(message: string): void {
    console.log(`Sending SMS notification: ${message}`);
  }
}

function main() {
  let notification: Notification = new BasicNotification();
  notification = new EmailDecorator(notification);
  notification = new SMSDecorator(notification);
  notification.send('System alert');
}

main();
