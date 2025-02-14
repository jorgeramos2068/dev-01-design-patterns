import prompts from 'prompts';

interface Report {
  generate: () => void;
}

class SalesReport implements Report {
  generate(): void {
    console.log('Generating sales report');
  }
}

class InventoryReport implements Report {
  generate(): void {
    console.log('Generating inventory report');
  }
}

abstract class ReportFactory {
  protected abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  override createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  override createReport(): Report {
    return new InventoryReport();
  }
}

async function main() {
  let reportFactory: ReportFactory;
  const { reportType } = await prompts({
    name: 'reportType',
    type: 'text',
    message: 'What type of report do you need (sales/inventory)?',
  });
  switch (reportType) {
    case 'sales':
      reportFactory = new SalesReportFactory();
      break;
    case 'inventory':
      reportFactory = new InventoryReportFactory();
      break;
    default:
      throw new Error('Invalid option');
  }
  reportFactory.generateReport();
}

main();
