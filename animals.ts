class animal{
    private age: number;
    private gender:string;

    isMammal() {
        // return null
        console.log('im an animal');
    }

    private mate() {
        console.log('sleepping');
        
    }
}
let Animal:animal //given data type
Animal = new animal(); //instatiant
Animal.isMammal(); //caling a function



