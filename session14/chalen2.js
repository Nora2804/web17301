class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    accelerrate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS() {
        return thi.speed / 1.6;
    }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerrate();
ford.accelerrate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
