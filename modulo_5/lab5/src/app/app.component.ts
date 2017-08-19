import { Component } from '@angular/core';

export class Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  quantity: number;
}


class Person{
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

class Student extends Person{
	
	clases:string[];
	grade:number;
	group:string;
	
	constructor(id:number,age:number,name:string,lastname:string,clases:string[],grade:number,group:string){
			super(id,age,name,lastname);
			this.clases=clases;
			this.grade=grade;
			this.group=group;
	}
	
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
}


class Teacher extends Person{
	
	profesion:string;
	grados:number[];
	grupos:string[];
	estudiantes:Student[];
	
	
	constructor(id: number,age:number,name:string,lastname:string,profesion:string,grados:number[],grupos:string[]){
			super(id,age,name,lastname);
			this.profesion=profesion;
			this.grados=grados;
			this.grupos=grupos;
	}
	
	getProfesion():string{
		return this.profesion;
	}		
	
	setProfesion(profesion:string):void{
		this.profesion=profesion;
	}
	
	getGrados():number[]{
		return this.grados;
	}
	
	setGrados(grados:number[]) :void{
		this.grados=grados;	
	}
	
	setGrupos(grupos:string[]):void{
		this.grupos=grupos;
	}
	
	getGrupos():string[]{
		return this.grupos;
	}

	setEstudiantes(estudiantes:Student[]):void{
		this.estudiantes=estudiantes;
	}
	
	getEstudiantes():Student[]{
		return this.estudiantes;
	}
	
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "los productos del Año";

  selected: Product;

  products: Product[] = PRODUCTS;
  grados: number[] = GRADOS;
  grupos: string[] = GRUPOS;

  onSelect(product: Product){
    this.selected = product;
  }
  
  titleProfesor: string = "Selecionar Profesor";
  
  profeSelected:Teacher;
  
  teachers: Teacher[] =TEACHERS;
  
  onSelectTeacher(teacher:Teacher){
	  this.profeSelected=teacher;
  }		
  
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Samsung galaxy 8",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 2,
    name: "Samsung galaxy 10",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 3,
    name: "Samsung galaxy 20",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  }
];

const   GRADOS: number[]=[1,2];

const   GRUPOS: string[]=['Grupo uno','Grupo dos'];

const   TEACHERS: Teacher[]=[
	/*{
			id:1,
			age:25,
			name:'Francisco',
			lastname:'Velandia',
			profesion:'ing quimico',
			grados:GRADOS,
			grupos:GRUPOS
	},
		
	{
		
	},
		
	{
		
	}
	*/
];