class Animal {
    name: string

    constructor(name:string) {
        this.name = name
    }

    move(): void {
        console.log(`${this.name} sedang bergerak`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("auu auu");
        
    }
}

const myDog = new Dog ("srigala");
myDog.move();
myDog.bark();