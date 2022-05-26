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
var IgnitionSystem = /** @class */ (function () {
    function IgnitionSystem() {
    }
    IgnitionSystem.prototype.start = function () {
        console.log("Vehicle is starting...");
    };
    IgnitionSystem.prototype.stop = function () {
        console.log("Vehicle is stopping...");
    };
    return IgnitionSystem;
}());
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.move = function () {
        console.log("Vehicle is moving...");
        return true;
    };
    return Engine;
}());
var Steering = /** @class */ (function () {
    function Steering() {
    }
    Steering.prototype.direct = function () {
        console.log("Vehicle is stable because of its steering...");
    };
    return Steering;
}());
var Suspension = /** @class */ (function () {
    function Suspension() {
    }
    Suspension.prototype.isStable = function () {
        console.log("Vehicle is stable because of its suspension...");
        return true;
    };
    return Suspension;
}());
var GearBox = /** @class */ (function () {
    function GearBox() {
    }
    GearBox.prototype.changeGear = function () {
        console.log("Vehicle is changing gear...");
        return true;
    };
    return GearBox;
}());
var BrakeSystem = /** @class */ (function () {
    function BrakeSystem() {
    }
    BrakeSystem.prototype.applyBrakes = function () {
        console.log("Vehicle is braking...");
    };
    return BrakeSystem;
}());
var Failure = /** @class */ (function () {
    function Failure() {
    }
    Failure.prototype.hasFailed = function (failureMessage) {
        console.log("Vehicle has experienced the following failure " + failureMessage);
        return false;
    };
    return Failure;
}());
var Car = /** @class */ (function () {
    function Car(ignition, move, stability, changeGears, brakes, failures, directing) {
        this.ignition = ignition;
        this.move = move;
        this.stability = stability;
        this.changeGears = changeGears;
        this.brakes = brakes;
        this.failures = failures;
        this.directing = directing;
    }
    Car.prototype.startVehicle = function () {
        return this.ignition.start();
    };
    Car.prototype.stopVehicle = function () {
        return this.ignition.stop();
    };
    Car.prototype.moveVehicle = function () {
        return this.move.move();
    };
    Car.prototype.steerVehicle = function () {
        return this.directing.direct();
    };
    Car.prototype.manageSuspension = function (stabilityMessage) {
        return this.stability.isStable(stabilityMessage);
    };
    Car.prototype.changeGear = function () {
        return this.changeGears.changeGear(2);
    };
    Car.prototype.brakeVehicle = function () {
        return this.brakes.applyBrakes();
    };
    Car.prototype.handleFailure = function (failureMessage) {
        return this.failures.hasFailed(failureMessage);
    };
    ;
    //setters and getters
    //open and close here by making data privte and using setters and getters
    Car.prototype.setIgnition = function (ignition) {
        this.ignition = ignition;
    };
    ;
    Car.prototype.getIgnition = function () {
        return this.ignition;
    };
    return Car;
}());
//manual car
//madam barbara liskov
var ManualCar = /** @class */ (function (_super) {
    __extends(ManualCar, _super);
    function ManualCar(ignition, move, stability, changeGears, brakes, failures, directing) {
        return _super.call(this, ignition, move, stability, changeGears, brakes, failures, directing) || this;
        //  this.gearlever = manualcar;
    }
    ;
    ManualCar.prototype.actLikeAmaunalCar = function () {
        console.log('acting like a manual car');
    };
    ;
    return ManualCar;
}(Car));
;
//automatic car
// class AutomaticCar extends Car{
//     private automaticTransmission:any 
//     constructor(ignition:Ignition, move:MoveVehicle, stability:Stability, directing:Directing, changeGears:Gears, brakes:Brakes, failures:Failures,automaticCar:any){
//         super(ignition,move,stability,changeGears,brakes,failures,directing);
//          this.automaticTransmission = automaticCar;
//     };
//     automaticCar(){
//         console.log ('automatic car also moving');
//     };
// };
//car
function carTest(car) {
    car.startVehicle();
    car.moveVehicle();
    car.manageSuspension('stable');
    car.handleFailure('fail');
    car.steerVehicle();
    car.stopVehicle();
}
;
//calling the manual car
function testManualcar(car) {
    car.startVehicle();
    car.moveVehicle();
    car.manageSuspension('stable');
    car.handleFailure('fail');
    car.steerVehicle();
    // car.manualcar();
    car.stopVehicle();
    car.actLikeAmaunalCar();
}
;
//Automatic car
// function automatic(car:AutomaticCar) {
//     car.startVehicle();
//     car.moveVehicle();
//     car.manageSuspension('stable');
//     car.handleFailure('fail');
//     car.steerVehicle();
//     car.automaticCar();
//     car.stopVehicle();
// };
var car;
car = new Car(new IgnitionSystem(), new Engine(), new Suspension(), new GearBox(), new BrakeSystem(), new Failure(), new Steering());
carTest(car);
//the new child shouldt fail the tests of the parent class
var car1;
car1 = new ManualCar(new IgnitionSystem(), new Engine(), new Suspension(), new GearBox(), new BrakeSystem(), new Failure(), new Steering());
carTest(car);
//Test
testManualcar(car1);
// let car = new Car(new IgnitionSystem(), new Engine(), new Steering(), new GearBox(), new BrakeSystem(), new Failure());
// car.startVehicle();
// car.moveVehicle();
// car.steerVehicle("Vehicle is stable due to a steering system");
// car.manageSuspension("Suspension is stable due to a suspension system");
// car.changeGear();
// car.brakeVehicle();
// car.handleFailure("Failure with the engine");
// car.stopVehicle();
// interface Ignition{
//     startCar(power:any);
//     stopCar(power:any);
// }
// class InIgnition implements Ignition {
//     // method
//     // here where we put the functions before we call them in the class
//     startCar(power:any){
//         console.log('car started with'+ power);
//         return power
//     }
//     stopCar(power:any){
//         console.log('car has stopped'+ power)
//         return power
//     }
// };
// interface Engine{
//     moveCar():any
// }
// class InEngine implements Engine{
//     // method
//     moveCar() {
//         console.log('engine starts car moving'); 
//         return true
//     }
// };
// interface Steering{
//     steerCar():any
// }
// class InSteering implements Steering{
//     // method
//     steerCar() {
//         console.log('turn left '); 
//         return true
//     }
// }
// class Suspension{
//     // method
//     balanceCar() {
//         console.log('car is balancing'); 
//     }
// }
// class Gearbox{
//     // method
//     changeGear() {
//         console.log('car changes gear'); 
//     }
// }
// class Brakesystem{
//     // method
//     brakeCar() {
//         console.log('car brakes'); 
//     }
// }
// // class Failure{
// //     // method
// //     handleFailure(failureMessage:string) {
// //         console.log('car is experiencing failure due to' + failureMessage); 
// //     }
// // }
// // HIGH COHENSION
// //LOW COUPLING DESIGN
// class Car{ //we only call the methods in the class car
//     //DATA
//     ignition:Ignition;
//     engine:Engine;
//     steering:Steering;
//     //ignition
//     startCar(power:any):any{    //composition /tight coupling and instastiation //why did it work without the ()?
//         // delegate
//        return this.ignition.startCar(power)
//     }
//     stopCar(power:any){
//         //delegate
//         return this.ignition.stopCar(power)
//     }
//     //engine
//     moveCar(){
//         return this.engine.moveCar()
//     }
//     //steering
//     steerCar() {
//         // let steering = new Steering();
//         // steering.steerCar()
//     }
//     //suspension
//     balanceCar() {
//         let suspension = new Suspension();
//         suspension.balanceCar();
//     }
//     //gearbox
//     changeGear() {
//         let gearbox = new Gearbox();
//         gearbox.changeGear()
//     }
//     //brakesystem
//     brakeCar() {
//         let brakesystem = new Brakesystem();
//         brakesystem.brakeCar()
//     }
//     //failure
//     // handleFailure(failureMessage:string) {
//     //     let failure = new Failure()
//     //     failure.handleFailure(failureMessage)
//     // }
// }
// let car = new Car()
// car.ignition = new InIgnition()
// car.startCar(2000)
