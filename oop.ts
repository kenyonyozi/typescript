// class

class customer{
    // data/attributes
    // private hides data 
    private name:string;
    private address:any;

    // operators/methods/behaviours
    constructor(nameArg:string , addressArg:any) {
        this. name=nameArg
        this.address=addressArg
           
    };  
}

abstract class payment{
    // data/attributes
    // private hides data 
     private amount:number;
     abstract pay()
    //console.log('genreic pay');
         
    //  };
    // private address:any;
    

    // // operators/methods/behaviours
    // constructor(amount:number) {
    //     this. amount=amount
    // };  
};
// extends is a key word for inherietance
class check extends payment {
    private name:string;
    private bankID:string;
    // constructor(name:string, bankID:string) {
    //     super('amount')
    //     this.name
    //     this.bankID
        
    // };
    authorized(){return null}
    pay(){
        console.log('payment by check');
        
    }
};

class credit extends payment {
    private number:string;
    private type:string;
    private expDate:Date;
    // constructor(number:string, type:string, expDate:date) {
    //     super('amount')
    //     this.number
    //     this.type
    //     this.expDate
        
    // };
    authorized(){return null}
    pay(){
        console.log('payment by credit');
        
    }
};

class cash extends payment {
    private cashTendered:number;
    pay(){
        console.log('payment by cash');
        
    }
    // constructor(cashTendered:number) {
    //     super('amount')
    //     this.cashTendered
        
    // };
};

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

// let pm1:credit = new credit();
// let pm2:cash = new cash();
// let pm3:check= new check();
// pm1.pay()

// polymophism 
let paymentMethod:payment;

paymentMethod = new cash;
paymentMethod.pay()

paymentMethod = new credit;
paymentMethod.pay()

paymentMethod = new check;
paymentMethod.pay()


// ds1.putFoodInMonth('posho');

