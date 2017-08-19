
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

var clasesStudent1:Array<string>=['matematicas','español'];
//var estudiante1=new Student(1,20,'migel','Amaya',{'matematicas','español'},10,'grupo1'); 
var estudiante1=new Student(1,20,'migel','Amaya',clasesStudent1,10,'grupo1'); 

var clasesStudent2:Array<string>=['fisica','quimica'];
//var estudiante1=new Student(1,20,'migel','Amaya',{'matematicas','español'},10,'grupo1'); 
var estudiante2=new Student(2,15,'Alex','Ruiz',clasesStudent1,7,'grupo2'); 


console.log(estudiante1);

var gradosP1:Array<number>=[4,5,6];
var gruposP1:Array<string>=['grupo1','grupo2','grupo3'];
var profesor1=new Teacher(2,45,'Profesor Carlos','Prado','ingeniero sistemas',gradosP1,gruposP1);
var estudianP1:Array<Student>=[estudiante1,estudiante2];

profesor1.setEstudiantes(estudianP1);


console.log(profesor1);