var InIgnition = /** @class */ (function () {
    function InIgnition() {
    }
    // method
    // here where we put the functions before we call them in the class
    InIgnition.prototype.startCar = function (power) {
        console.log('car started with' + power);
        return power;
    };
    InIgnition.prototype.stopCar = function (power) {
        console.log('car has stopped' + power);
        return power;
    };
    return InIgnition;
}());
;
var InEngine = /** @class */ (function () {
    function InEngine() {
    }
    // method
    InEngine.prototype.moveCar = function () {
        console.log('engine starts car moving');
        return true;
    };
    return InEngine;
}());
;
var InSteering = /** @class */ (function () {
    function InSteering() {
    }
    // method
    InSteering.prototype.steerCar = function () {
        console.log('turn left ');
        return true;
    };
    return InSteering;
}());
var Suspension = /** @class */ (function () {
    function Suspension() {
    }
    // method
    Suspension.prototype.balanceCar = function () {
        console.log('car is balancing');
    };
    return Suspension;
}());
var Gearbox = /** @class */ (function () {
    function Gearbox() {
    }
    // method
    Gearbox.prototype.changeGear = function () {
        console.log('car changes gear');
    };
    return Gearbox;
}());
var Brakesystem = /** @class */ (function () {
    function Brakesystem() {
    }
    // method
    Brakesystem.prototype.brakeCar = function () {
        console.log('car brakes');
    };
    return Brakesystem;
}());
// class Failure{
//     // method
//     handleFailure(failureMessage:string) {
//         console.log('car is experiencing failure due to' + failureMessage); 
//     }
// }
// HIGH COHENSION
//LOW COUPLING DESIGN
var Car = /** @class */ (function () {
    function Car() {
    }
    //ignition
    Car.prototype.startCar = function (power) {
        // delegate
        return this.ignition.startCar(power);
    };
    Car.prototype.stopCar = function (power) {
        //delegate
        return this.ignition.stopCar(power);
    };
    //engine
    Car.prototype.moveCar = function () {
        return this.engine.moveCar();
    };
    //steering
    Car.prototype.steerCar = function () {
        // let steering = new Steering();
        // steering.steerCar()
    };
    //suspension
    Car.prototype.balanceCar = function () {
        var suspension = new Suspension();
        suspension.balanceCar();
    };
    //gearbox
    Car.prototype.changeGear = function () {
        var gearbox = new Gearbox();
        gearbox.changeGear();
    };
    //brakesystem
    Car.prototype.brakeCar = function () {
        var brakesystem = new Brakesystem();
        brakesystem.brakeCar();
    };
    return Car;
}());
var car = new Car();
car.ignition = new InIgnition();
car.startCar(2000);
