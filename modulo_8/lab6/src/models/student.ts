import { Person } from '../models/person';


export class Student extends Person{
	
	clases:string[];
	grade:number;
	group:string;
	
	constructor(id:number,age:number,name:string,lastname:string,clases:string[],grade:number,group:string){
			super(id,age,name,lastname);
			this.clases=clases;
			this.grade=grade;
			this.group=group;
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