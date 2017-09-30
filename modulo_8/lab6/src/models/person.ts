export class Person{
	id: number;
	age: number;
	name: string;
	lastname: string;
	
	constructor(id: number,age: number,name: string,lastname: string){
		this.id=id;
		this.age=age;
		this.name=name;
		this.lastname=lastname;
	}
	
	getId():number{
		return this.id;
	}
	
	setId(id:number):void{
		this.id=id;
	}
	
	getAge():number{
		return this.age;
	}
	
	setAge(age:number):void{
		this.age=age;
	}
	
	getName():string{
		return this.name;
	}
	
	setName(name:string):void{
		this.name=name;
	}
	
	getLastname():string{
		return this.lastname;
	}
	
} 