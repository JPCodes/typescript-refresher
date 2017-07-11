// Writing a class definition and constructor
class Invoice {
  // public is default and not necessary to type
  public companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = `${name}, ${city}, ${state}`;
  }
}
  // instantiating an Invoice
var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var yahooInvoice = new Invoice('Yahoo', 'Sunny Vale', 'CA');

// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);


// Writing a parent class
class Report {
  companyProfile : string;

  constructor(public name : string) {
    this.companyProfile = name;
  }
}
  // Classes that will inherit from parent class 'Report'
    // 'Child class' is a type of 'Parent class'
    // 'Invoiice' is a type of 'Report'
class Invoiice extends Report {
  // 'super' is calling 'name' from the parent class
  constructor(public name : string, public total : number) { super(name); }

  // class method for Invoiice but NOT Report or BillOfLading
  printInvoiice() {
    return `Invoice: ${this.name}, ${this.total}`;
  }
}

class BillOfLading extends Report {
  constructor(public name : string, public city : string, public state : string) { super(name); }

  printBill() {
    return `Bill: ${this.name}, ${this.city}, ${this.state}`;
  }
}

var invoiceReport = new Invoiice('Google', 200);
var invoiceTwoReport = new Invoiice('Yahoo', 2000);
  console.log(invoiceReport.companyProfile);
  console.log(invoiceReport.printInvoiice());

var billReport = new BillOfLading('Yahoo', 'Sunny Vale', 'CA');
  console.log(billReport.printBill());
