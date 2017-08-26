import { Person } from '../models/person';
import { Student } from '../models/student';

export class Teacher extends Person{
	
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
	/*
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
	*/
}