class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children= []
    }

    giveBirth(name){
        this.children.push(name);
        console.log("Boom. Birthed " + name)
    }
}

const dog= new Animal("bob", 4);
console.log(dog.name);


class Human {
    constructor(name, age, isFriendly){
        this.name=name;
        this.age=age;
        this.isFriendly=isFriendly;
    }
}

const person= new Human("Bob", 30, true)
console.log(person)


class Vehicle {
    static carsSold = 0;

    constructor(x,y,speed,fuel){
        this.x=x;
        this.y=y;
        this._fuel=fuel;
        this._speed=speed;
    }
    get speed(){
        return this._speed;
    }
    set speed(newSpeed){
        this._speed=newSpeed;
    }
    get fuel (){
        return _fuel;
    }
    set fuel (newFuel){
        if (newFuel> 150)
            return console.log("Too much fuel");
        if (newFuel<0)
            return console.log("Too littel");
        this._fuel=newFuel;
    }

    static getInfo(){ 
        console.log("Cars are great " + Vehicle.carsSold)
    }
    static calculateMoney () {
        console.log(Vehicle.carsSold * 30000);

    }
}

Vehicle.getInfo();
Vehicle.calculateMoney();