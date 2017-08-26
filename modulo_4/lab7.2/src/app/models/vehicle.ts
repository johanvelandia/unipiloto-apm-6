//import { Person } from '../models/person';


export class Vehicle{
	
	brand:string;
	model:string;
	color:string;
	plate:string;
	capacity:string;
	built_year:number;
	
	constructor(brand:string,model:string,color:string,plate:string,capacity:string,built_year:number){
			this.brand=brand;
			this.model=model;
			this.color=color;
			
			this.plate=plate;
			this.capacity=capacity;
			this.built_year=built_year;
	}
	/*
	setClases(clases:string[]):void{
		this.clases=clases;
	}
	
	getClases():string[]{
		return this.clases;
	}
	
	setGrade(grade:number):void{
		this.grade=grade;
	}
	
	getGrade():number{
		return this.grade;
	}
	
	setGroup(group:string):void{
		this.group=group;
	}
	
	getGroup():string{
		return this.group;
	}
	*/
}