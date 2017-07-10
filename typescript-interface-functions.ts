// TypeScript Interface Functions

interface InvoiceFunc {
  // function arguments
  (name : string, total : number) : void;
}

  // myInvoice is of type 'InvoiceFunc'
let myInvoice : InvoiceFunc;
  // define a function for myInvoice
myInvoice = function(n, t) {
  console.log(n);
  console.log(t);
};

  // arguments match interface constraints
myInvoice('Google', 500)
