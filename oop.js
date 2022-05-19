// class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var customer = /** @class */ (function () {
    // operators/methods/behaviours
    function customer(nameArg, addressArg) {
        this.name = nameArg;
        this.address = addressArg;
    }
    ;
    return customer;
}());
var payment = /** @class */ (function () {
    function payment() {
    }
    return payment;
}());
;
// extends is a key word for inherietance
var check = /** @class */ (function (_super) {
    __extends(check, _super);
    function check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(name:string, bankID:string) {
    //     super('amount')
    //     this.name
    //     this.bankID
    // };
    check.prototype.authorized = function () { return null; };
    return check;
}(payment));
;
var credit = /** @class */ (function (_super) {
    __extends(credit, _super);
    function credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(number:string, type:string, expDate:date) {
    //     super('amount')
    //     this.number
    //     this.type
    //     this.expDate
    // };
    credit.prototype.authorized = function () { return null; };
    return credit;
}(payment));
;
var cash = /** @class */ (function (_super) {
    __extends(cash, _super);
    function cash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cash;
}(payment));
;
// Creating a method signture
// concatenateName():String {return this.name} 
// cocantenate
// let firstname ='bob',
// let lastname = 'jon'
//  function concantente(fname, lname) {
//      return fname + lname
//  }
//  console.log(concantent(fname,lastname));
// abstraction data
// class DigestiveSystem {
//     // data
//     private food;
//     // methods
//     public putFoodInMonth(food:string){
//         this.ingestion(food)
//     }
//    private ingestion(food:string){
//     this.pelistylisis(food)
//    }
//    private pelistylisis(bolus:string){}
//    private absorption(xxx:string){}
//    private ejestion(yyy:string){}
//    public easeYourSelf(zzz;string){}
// };
var MyPaymentMethod = new DigestiveSystem;
// ds1.putFoodInMonth('posho');
