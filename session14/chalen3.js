const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.acclerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`)
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make}) is going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
    Car.call(this, make, charge);
    {
        Car.call(this, make, speed);
        this.charge = charge;
    }
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    EV.prototype.acclerate = function () {
        this.speed += 20;
        this.chage--;
        console.log(
            `{This make}is going at ${this.speed} km/h, with a charge of ${this.charge}`
        )

    }
};
const tesla = new EV(`Tesla`, 120, 20);
testla.chargeBattery(90);
consl0.log(Testla);
test.break();
test.acclerate();