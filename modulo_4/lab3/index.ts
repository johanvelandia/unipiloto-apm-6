interface Vehicle{
	wheel: number;
	fuel: string;
	private color: string;

	constructor(wheel: number, fuel: string, color: string = 'white'){};
	
	getWheel():number{};
	getFuel():string;
	getColor():string;
	
	setWheel(wheel:number){};
	setFuel(fuel:string){};
	setColor(color:string){};
	
	
}


/*class Vehicle {
	wheel: number;
	fuel: string;
	private color: string;

	constructor(wheel: number, fuel: string, color: string = 'white'){
		this.color = color;
		this.fuel = fuel;
		this.wheel = wheel;
	}
}*/

class Car extends Vehicle {
	constructor(){
		super(4, 'gas', 'red');
	}
}

class Motorcycle extends Vehicle {
	deluxe:boolean;

	constructor(deluxe: boolean){
		super(2, 'gasoline');
		this.deluxe = deluxe;
	}

	setFuel(fuel: string): void{
		this.fuel = fuel;
	}

	getFuel(): string{
		return this.fuel;
	}
}

var car = new Car();
var motorcycle = new Motorcycle(false);

console.log(car);
console.log(motorcycle);


/*interface Person {
	nid: number;
	name: string;
	age: number;

	getNid(): number;
	getName(): string;
	getAge(): number;

	setNid(nid:number): void;
	setName(name:string): void;
	setAge(age:number): void;
}*/
