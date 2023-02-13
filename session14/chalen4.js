class CaCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCL extends CaCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge
            }`
        );
    }

}

const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);
