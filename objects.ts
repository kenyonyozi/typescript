//here creating objects literally
// let custome1: object = {name:'john', adress:'newyork'}
// let custome2: object = {name:'jen', adress:'la'}
// let custome3: object = {name:'jake', adress:'boston'}

// creating opjects using factory function
// we lavrage the feature called a function it has two steps

// 1.define a template or the blueprint (get a name)
// when someone is inovking they use argumments even tho we pass them as paraments
// Object is a return type

// function customer(nameArg:string , addressArg:any):Object {
//   return{name:nameArg, adress:addressArg}
    
// };
//  2.creating objects
// let customer1 = customer('john','newyork')
// let customer2 = customer('jen', 'la')
// let customer3 = customer('jake','boston')

// console.log(customer1);

// constructor function
// we dont need a 
// function JumiaCustomer(nameArg:string , addressArg:any) {
//    this. name=nameArg
//    this.address=addressArg
      
// };
// KEY WORD NEW AND THIS
// let customer1 = new JumiaCustomer('john','newyork')
// let customer2 = new JumiaCustomer('jen', 'la')
// let customer3 = new JumiaCustomer('jake','boston')

// customer1.name ='bob' //to change the name or
// customer1['name'] = 'bob' //better way to change namecause you can add first name or last name
// console.log(customer1.name);


// class

class JumiaCustomer{
    // data
    name:string
    address:string

    // operations
    constructor(nameArg:string , addressArg:any) {
        this. name=nameArg
        this.address=addressArg
           
    }; 
}

 // KEY WORD NEW AND THIS
 let customer1 = new JumiaCustomer('john','newyork')
 let customer2 = new JumiaCustomer('jen', 'la')
 let customer3 = new JumiaCustomer('jake','boston')
 
 customer1.name ='bob' //to change the name or
 customer1['name'] = 'bob' //better way to change namecause you can add first name or last name
 console.log(customer1.name);