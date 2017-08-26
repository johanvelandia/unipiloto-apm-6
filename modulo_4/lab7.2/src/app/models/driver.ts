//import { Person } from '../models/person';


export class Driver{
	
	id:number;
	license:number;
	first_name:string;
	last_name:string;
	age:number;
	
	constructor(id:number,license:number,first_name:string,last_name:string,age:number){
			this.id=id;
			this.license=license;
			this.first_name=first_name;
			this.last_name=last_name;
			this.age=age;
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