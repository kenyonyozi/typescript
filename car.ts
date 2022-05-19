interface Ignition{
    startCar(power:any);
    stopCar(power:any);
}
class InIgnition implements Ignition {
    // method
    // here where we put the functions before we call them in the class
    startCar(power:any){
        console.log('car started with'+ power);
        return power
    }
    stopCar(power:any){
        console.log('car has stopped'+ power)
        return power
    }
};

interface Engine{
    moveCar():any
}
class InEngine implements Engine{
    // method
    moveCar() {
        console.log('engine starts car moving'); 
        return true
    }

};

interface Steering{
    steerCar():any
}

class InSteering implements Steering{
    // method
    steerCar() {
        console.log('turn left '); 
        return true
    }

}
class Suspension{
    // method
    balanceCar() {
        console.log('car is balancing'); 
    }

}
class Gearbox{
    // method
    changeGear() {
        console.log('car changes gear'); 
    }

}
class Brakesystem{
    // method
    brakeCar() {
        console.log('car brakes'); 
    }

}
// class Failure{
//     // method
//     handleFailure(failureMessage:string) {
//         console.log('car is experiencing failure due to' + failureMessage); 
//     }

// }
// HIGH COHENSION
//LOW COUPLING DESIGN

class Car{ //we only call the methods in the class car
    //DATA
    ignition:Ignition;
    engine:Engine;
    steering:Steering;

    //ignition
    startCar(power:any):any{    //composition /tight coupling and instastiation //why did it work without the ()?
        // delegate
       return this.ignition.startCar(power)
    }
    stopCar(power:any){
        //delegate
        return this.ignition.stopCar(power)
    }
    //engine
    moveCar(){
        return this.engine.moveCar()
    }
    //steering
    steerCar() {
        // let steering = new Steering();
        // steering.steerCar()
    }

    //suspension
    balanceCar() {
        let suspension = new Suspension();
        suspension.balanceCar();
    }
   
    //gearbox
    changeGear() {
        let gearbox = new Gearbox();
        gearbox.changeGear()
    }

    //brakesystem
    brakeCar() {
        let brakesystem = new Brakesystem();
        brakesystem.brakeCar()
    }

    //failure
    // handleFailure(failureMessage:string) {
    //     let failure = new Failure()
    //     failure.handleFailure(failureMessage)
    // }
  
}

let car = new Car()
car.ignition = new InIgnition()
car.startCar(2000)