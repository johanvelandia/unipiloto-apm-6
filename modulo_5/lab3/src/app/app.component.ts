import { Component } from '@angular/core';

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

export class Student extends Person{
	
	clases:string;
	grade:number;
	group:string;
	
	constructor(id:number,age:number,name:string,lastname:string,clases:string,grade:number,group:string){
			super(id,age,name,lastname);
			this.clases=clases;
			this.grade=grade;
			this.group=group;
	}
	
	setClases(clases:string):void{
		this.clases=clases;
	}
	
	getClases():string{
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
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab5';
  //clasesStudent1:Array<string>=['matematicas','español'];
  //student:Student={1,20,'migel','Amaya',clasesStudent1,10,'grupo1'};
   estudiante1=new Student(1,20,'migel','Amaya','grupo 1 grupo2 grupo 3',10,'grupo1'); 
}
