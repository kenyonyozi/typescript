/*

Computer
    inputs data through the keybord
    outputs data through the screen
    stores data in memory
    processes data in the cpu
    Handles exceptions
    retrieves data from memory

*/
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
var inputDataFromKeyboard = /** @class */ (function () {
    function inputDataFromKeyboard() {
    }
    inputDataFromKeyboard.prototype.inputData = function () {
        return "Data from keyboard";
    };
    return inputDataFromKeyboard;
}());
var inMemoryy = /** @class */ (function () {
    function inMemoryy() {
        this.memory = [];
    }
    inMemoryy.prototype.storeData = function (data) {
        console.log("Data has been stored in memory");
        if (!this.memory.push(data)) {
            throw new Error("Data could not be stored");
        }
        return data;
    };
    inMemoryy.prototype.retrieveData = function (basis) {
        console.log("Data has been retrieved from memory");
        return this.memory;
    };
    return inMemoryy;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.processData = function (data) {
        console.log("Data has been processed by the CPU");
        return data;
    };
    return CPU;
}());
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.displayData = function (data) {
        console.log(data);
    };
    return Monitor;
}());
var Errors = /** @class */ (function () {
    function Errors() {
    }
    Errors.prototype.handleError = function (error) {
        console.log("Error: " + error);
    };
    return Errors;
}());
var Computer = /** @class */ (function () {
    //Methods
    function Computer(inputDevice, memory, processor, errors, displayDevice) {
        this.inputDevice = inputDevice;
        this.memory = memory;
        this.processor = processor;
        this.errors = errors;
        this.displayDevice = displayDevice;
    }
    Computer.prototype.input = function () {
        return this.inputDevice.inputData();
    };
    Computer.prototype.store = function (data) {
        //Delegate the responsibility to another class
        return this.memory.storeData(data);
    };
    Computer.prototype.retrieve = function (data) {
        return this.memory.retrieveData(data);
    };
    Computer.prototype.process = function (data) {
        this.processor.processData(data);
    };
    Computer.prototype.handleError = function (error) {
        this.errors.handleError(error);
    };
    Computer.prototype.display = function (data) {
        this.displayDevice.displayData(data);
    };
    //setters and getters (accesors)
    Computer.prototype.setInputDevice = function (inputDevice) {
        this.inputDevice = inputDevice;
    };
    //getter doesnt take in anything but must return
    Computer.prototype.getInputDevice = function () {
        return this.inputDevice;
    };
    //store
    //open closed principle
    Computer.prototype.setMemory = function (memory) {
        this.memory = memory;
    };
    //getter doesnt take in anything but must return
    Computer.prototype.getMemory = function () {
        return this.memory;
    };
    return Computer;
}());
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
var ChargeableComputer = /** @class */ (function (_super) {
    __extends(ChargeableComputer, _super);
    function ChargeableComputer(inputDevice, memory, processor, errors, displayDevice) {
        return _super.call(this, inputDevice, memory, processor, errors, displayDevice) || this;
        // this.charger = new charger;
    }
    ChargeableComputer.prototype.charge = function () {
        console.log('charging...');
    };
    return ChargeableComputer;
}(Computer));
;
//singleton pattern THERE SHOULD BE ONLT ONE INSTANCE OF A CLASS
//SHOULD BE ONLY ONE LOGGED IN USER AT A TIME
var Logger = /** @class */ (function () {
    function Logger(user) {
        Logger.UserDetail = user;
    }
    Logger.login = function (user) {
        //if its not equal to null login in user
        if (Logger.loggedInUser != null) {
            return Logger.loggedInUser;
        }
        ;
        //instance
        Logger.loggedInUser = new Logger(user);
    };
    ;
    Logger.getLoggedInUser = function () {
        return Logger.UserDetail;
    };
    Logger.logout = function () {
        // if equal to null log out
        Logger.loggedInUser = null;
    };
    Logger.UserDetail = {};
    return Logger;
}());
;
Logger.login({ name: 'blue', password: 'jean' });
console.log(Logger.getLoggedInUser());
Logger.login({ name: 'bob', password: 'baggs' });
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
function testComputer(computer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.handleError("Error: ");
    computer.display("Processed data from memory");
}
;
function testChargableComputer(computer) {
    computer.input();
    computer.store("This Data from keyboard");
    computer.retrieve("This Data from memory");
    computer.process("Data from memory");
    computer.handleError("Error: ");
    computer.display("Processed data from memory");
    computer.charge();
}
;
// let computer:Computer
// computer = new Computer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
// testComputer(computer);
var computer1;
computer1 = new ChargeableComputer(new inputDataFromKeyboard(), new inMemoryy(), new CPU(), new Errors(), new Monitor());
testComputer(computer1);
testChargableComputer(computer1);
