class person {
    name: string;
    age: number;


constructor(name:string, age:number) {
    this.name = name
    this.age = age
}

greet(): void{
    console.log(`perkenalkan saya ${this.name}, saya berumur ${this.age}`);
    
}
}

const person1 = new person ("asyaa", 20)
person1.greet();