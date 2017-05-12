// https://www.typescriptlang.org/docs/handbook/interfaces.html
// Difference between the static and instance sides of classes

// 1
// interface ClockConstructor{
//     new (hour: number, minute: number);
// }

/*
Class 'Clock' incorrectly implements interface 'ClockConstructor'.
  Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
*/
/*
look up the ·related info in the URL foremost:
This is because when a class implements an interface, only the instance side of the class is checked. Since the constructor sits in the static side, it is not included in this check.
*/
// class Clock implements ClockConstructor{
//     constructor(h:number, m:number){
//         console.log("Clock");
//     };
// }

// 2
interface ClockConstructor {
    new (hour: number, minute: number);
}

interface ClockInterface {
    tick();
}

function createClock(ctor:ClockConstructor, h:number, m:number):ClockInterface{
    return new ctor(h, m);
}

class DigitalClock implements ClockInterface {
    tick() {
        console.log("beep beep");
    };
    constructor(h: number, m: number) {
        console.log("DigitalClock");
    };
}

let digital = createClock(DigitalClock, 23, 59);





