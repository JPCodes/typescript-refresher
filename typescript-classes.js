var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Writing a class definition and constructor
var Invoice = (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
// instantiating an Invoice
var googleInvoice = new Invoice('Google', 'Mountain View', 'CA');
var yahooInvoice = new Invoice('Yahoo', 'Sunny Vale', 'CA');
// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);
// Writing a parent class
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
// Classes that will inherit from parent class 'Report'
// 'Child class' is a type of 'Parent class'
// 'Invoiice' is a type of 'Report'
var Invoiice = (function (_super) {
    __extends(Invoiice, _super);
    // 'super' is calling 'name' from the parent class
    function Invoiice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    // class method for Invoiice but NOT Report or BillOfLading
    Invoiice.prototype.printInvoiice = function () {
        return "Invoice: " + this.name + ", " + this.total;
    };
    return Invoiice;
}(Report));
var BillOfLading = (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printBill = function () {
        return "Bill: " + this.name + ", " + this.city + ", " + this.state;
    };
    return BillOfLading;
}(Report));
var invoiceReport = new Invoiice('Google', 200);
var invoiceTwoReport = new Invoiice('Yahoo', 2000);
console.log(invoiceReport.companyProfile);
console.log(invoiceReport.printInvoiice());
var billReport = new BillOfLading('Yahoo', 'Sunny Vale', 'CA');
console.log(billReport.printBill());
//# sourceMappingURL=typescript-classes.js.map