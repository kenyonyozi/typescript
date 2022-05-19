var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.isMammal = function () {
        // return null
        console.log('im an animal');
    };
    animal.prototype.mate = function () {
        console.log('sleepping');
    };
    return animal;
}());
var Animal; //given data type
Animal = new animal(); //instatiant
Animal.isMammal(); //caling a function
