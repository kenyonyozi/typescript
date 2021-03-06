/*

Computer
    inputs data through the keybord
    outputs data through the screen
    stores data in memory
    processes data in the cpu
    Handles exceptions
    retrieves data from memory

*/

//Single responsibility principle states that a class should have only one reason to change

interface InputDevice{  
    inputData(): any;
}

class inputDataFromKeyboard implements InputDevice{
    inputData(){
        return "Data from keyboard";
        
    }
}

interface Memory {
    storeData(data: any): boolean;
    retrieveData(basis: any): any;

}

interface Processor{
    processData(data: any): any;
}

interface ComputerErrors{
    handleError(error: any): any;

}

class inMemoryy implements Memory {
    memory: any[] = [];
    storeData(data:any){
        console.log("Data has been stored in memory");
        
        if(!this.memory.push(data)){
            throw new Error("Data could not be stored");
        } 
        return data;
    }
    
    retrieveData(basis:any){
        console.log("Data has been retrieved from memory");
        return this.memory;
    }
}

class CPU implements Processor{
    processData(data: any){
        console.log("Data has been processed by the CPU");
        
        return data;
    }
}
  

interface DisplayDevice{
    displayData(data: any): void;
}

class Monitor implements DisplayDevice{
    displayData(data: any){
        console.log(data);
    }
   
}

class Errors implements ComputerErrors{
    handleError(error:any){
        console.log("Error: "+error);
    }
}

class Computer{
    //Data
    private inputDevice:InputDevice;
    private memory:Memory;
    private processor:Processor;
    private errors:ComputerErrors;
    private displayDevice:DisplayDevice;

    //Methods

    constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.errors = errors;
        this.displayDevice = displayDevice;
    }

    input(){   
        return this.inputDevice.inputData();
    }

    store(data:any): boolean{
        
        //Delegate the responsibility to another class
        return this.memory.storeData(data);
    }

    retrieve(data:any){
        return this.memory.retrieveData(data);
    }

    process(data:any){    
        this.processor.processData(data);
    }

    handleError(error:any){   
        this.errors.handleError(error); 
    }

    display(data:any){   
        this.displayDevice.displayData(data);
    }

    //setters and getters (accesors)
    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice
    }
    //getter doesnt take in anything but must return
    getInputDevice(){
        return this.inputDevice
    }

    //store
    //open closed principle
    setMemory(memory:Memory){
        this.memory = memory
    }
    //getter doesnt take in anything but must return
    getMemory(){
        return this.memory
    }

}

//Test
//inst them here 
// let computer = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// computer.input();
// computer.store("This Data from keyboard");
// computer.retrieve("This Data from memory");
// computer.process("Data from memory");
// computer.display("Processed data from memory");


//open closed principle
// class Mouse implements InputDevice{
//     inputData() {
//         return 'input by mouse'
//     };
// };


// to set or get  the method of new mouse by using the mouse to inputdata one way to leave room for the extention
// computer.setInputDevice(new Mouse())
// console.log(computer.getInputDevice());

//setter and getter for the rest

//note never expose the data variable (ecpsulation)
// we have to make them private
//open/closed principle
//states that a moduel should be open for extention
//closed is for modification
//create a new class and and make changes in computer
class ChargeableComputer extends Computer{
    private charger:any;
constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
    super(inputDevice,memory,processor,errors,displayDevice)
    // this.charger = new charger;
}
charge(){
    console.log('charging...')
}

};
//secure computer
class SecureComputer extends Computer{
    private logger:Logger;
constructor(inputDevice:InputDevice, memory:Memory, processor:CPU, errors:ComputerErrors, displayDevice:DisplayDevice){
    super(inputDevice,memory,processor,errors,displayDevice)
    // this.charger = new charger;
}
setLogger(logger:Logger){
    this.logger = logger
}
getLogger(){
    return this.logger
}
};


//singleton pattern THERE SHOULD BE ONLT ONE INSTANCE OF A CLASS
//SHOULD BE ONLY ONE LOGGED IN USER AT A TIME
class Logger{
    private static loggedInUser:object;
        private static UserDetail = {};

    private constructor(user:object){
        Logger.UserDetail = user;
    }
    static login(user:object){
       //if its not equal to null login in user
        if (Logger.loggedInUser != null){
            return Logger.loggedInUser;
        };
         //instance
        Logger.loggedInUser = new Logger(user);
    };
    static getLoggedInUser(){
        return Logger.UserDetail;
    }

    static logout(){
        // if equal to null log out
        Logger.loggedInUser = null;
    }
};

Logger.login({name:'blue',password:'jean'});
console.log(Logger.getLoggedInUser());
Logger.login({name:'bob',password:'baggs'});
console.log(Logger.getLoggedInUser());

//liskov substition principle states class A is a subtype of class B, (is-substitutable-with )
//we should be able to replace B with A without disrupting the behavior of our program
//works with concrete classes 
//signiture shouldnt be tampered with eg string type booleen 
//the child class cant have a method that interferes with the super class
//the objects can change

//has-A(COMPOSITION )
//IS- A (INHERITENCE )

//an computer that doesnt do this is not our computer by liskov 
// function TestComputer(computer:Computer) {
//   computer.input();
//   computer.store("This Data from keyboard");
//   computer.retrieve("This Data from memory");
//   computer.process("Data from memory");
//   computer.display("Processed data from memory");
    
// };

//computer test
function testComputer(computer:Computer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.handleError("Error: ");
    computer.display("Processed data from memory");
        
};

function testChargableComputer(computer:ChargeableComputer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.handleError("Error: ");
    computer.display("Processed data from memory");
    computer.charge();
        
};

// let computer:Computer
// computer = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// testComputer(computer);

let computer1:ChargeableComputer
computer1 = new ChargeableComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
testComputer(computer1);

testChargableComputer(computer1);