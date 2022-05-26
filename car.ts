interface Ignition{
    start(): void;
    stop(): void;
}

interface MoveVehicle{
    move(): void;

}

interface Stability{
    isStable(stabilityMessage:string): boolean;
}

interface Directing{
    direct();
}

interface Gears{
    changeGear(gear: number): void;
}

interface Brakes{
    applyBrakes(): void;
}

interface Failures{
    hasFailed(failureMessage:string): boolean;
}

class IgnitionSystem implements Ignition{
    start(){
        console.log("Vehicle is starting...");
    }

    stop(){
        console.log("Vehicle is stopping...");
    }
}

class Engine implements MoveVehicle{
    move(){
        console.log("Vehicle is moving...");

        return true;
    }
}

class Steering implements Directing{ 
    direct(){ 
        console.log("Vehicle is stable because of its steering...");
    }
}
class Suspension implements Stability{
    isStable(){
        console.log("Vehicle is stable because of its suspension...");
        return true;
    }
}

class GearBox implements Gears{
    changeGear(){
        console.log("Vehicle is changing gear...");
        return true;
    }
}

class BrakeSystem implements Brakes{
    applyBrakes(): void {
        console.log("Vehicle is braking...");
    }
}

class Failure implements Failures{
    hasFailed(failureMessage:string): boolean {
        console.log("Vehicle has experienced the following failure "+failureMessage);
        return false;
    }
}



class Car {
    private ignition:Ignition;
    private  move:MoveVehicle;
    private stability:Stability;
    private changeGears:Gears;
    private brakes:Brakes;
    private failures:Failures;
    private directing:Directing;

    constructor(ignition:Ignition, move:MoveVehicle, stability:Stability, changeGears:Gears, brakes:Brakes, failures:Failures ,directing:Directing){
        this.ignition = ignition;
        this.move = move;
        this.stability = stability;
        this.changeGears = changeGears;
        this.brakes = brakes;
        this.failures = failures;
        this.directing = directing;
    }


    startVehicle(){
       return this.ignition.start();
    }

    stopVehicle(){
       
        return this.ignition.stop();
    }

    moveVehicle(){
        return this.move.move();
    }

    steerVehicle(){
        return this.directing.direct();
    }

    manageSuspension(stabilityMessage:string){
        return this.stability.isStable(stabilityMessage);
    }

    changeGear(){
        return this.changeGears.changeGear(2);
    }

    brakeVehicle(){
        return this.brakes.applyBrakes();
    }

    handleFailure(failureMessage:string){
        return this.failures.hasFailed(failureMessage);
    };

    //setters and getters
    //open and close here by making data privte and using setters and getters
    setIgnition(ignition:Ignition){
        this.ignition = ignition;
    };

    getIgnition(){
      return this.ignition
    }
}

//manual car
//madam barbara liskov
class ManualCar extends Car{
    private gearlever:any 

    constructor(ignition:Ignition, move:MoveVehicle, stability:Stability, changeGears:Gears, brakes:Brakes, failures:Failures ,directing:Directing){
        super(ignition,move,stability,changeGears,brakes,failures,directing);
        //  this.gearlever = manualcar;
    };
    actLikeAmaunalCar(){
        console.log ('acting like a manual car');
    };
};

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
function carTest(car:Car) {
    car.startVehicle();
    car.moveVehicle();
    car.manageSuspension('stable');
    car.handleFailure('fail');
    car.steerVehicle();
    car.stopVehicle();
};
//calling the manual car
function testManualcar(car:ManualCar) {
    car.startVehicle();
    car.moveVehicle();
    car.manageSuspension('stable');
    car.handleFailure('fail');
    car.steerVehicle();
    // car.manualcar();
    car.stopVehicle();
    car.actLikeAmaunalCar();
};

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


let car:Car;
car = new Car(new IgnitionSystem(),new Engine(), new Suspension(), new GearBox(), new BrakeSystem(),new Failure(),new Steering());
carTest(car);

//the new child shouldt fail the tests of the parent class
let car1:ManualCar;
car1 = new ManualCar(new IgnitionSystem(),new Engine(), new Suspension(), new GearBox(), new BrakeSystem(),new Failure(),new Steering());
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