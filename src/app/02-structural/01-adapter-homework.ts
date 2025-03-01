interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Processing payment $${amount} with PayPal`);
  }
}

class StripeService {
  makeCharge(amount: number): void {
    console.log(`Processing payment $${amount} with Stripe`);
  }
}

class MercadoPagoService {
  pay(amount: number): void {
    console.log(`Processing payment $${amount} with MercadoPago`);
  }
}

// Adapter for PayPal
class PayPalAdapter implements PaymentProcessor {
  private service: PayPalService;

  constructor() {
    this.service = new PayPalService();
  }

  public processPayment(amount: number) {
    this.service.sendPayment(amount);
  }
}

// Adapter for Stripe
class StripeAdapter implements PaymentProcessor {
  private service: StripeService;

  constructor() {
    this.service = new StripeService();
  }

  public processPayment(amount: number) {
    this.service.makeCharge(amount);
  }
}

// Adapter for MercadoPago
class MercadoPagoAdapter implements PaymentProcessor {
  private service: MercadoPagoService;

  constructor() {
    this.service = new MercadoPagoService();
  }

  public processPayment(amount: number) {
    this.service.pay(amount);
  }
}

function main() {
  const paymentAmount = 100;
  const paypalProcessor: PaymentProcessor = new PayPalAdapter();
  const stripeProcessor: PaymentProcessor = new StripeAdapter();
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter();

  console.log('Using PayPal:');
  paypalProcessor.processPayment(paymentAmount);

  console.log('Using Stripe:');
  stripeProcessor.processPayment(paymentAmount);

  console.log('Using MercadoPago:');
  mercadoPagoProcessor.processPayment(paymentAmount);
}

main();
