import { Component } from '@angular/core';

import { Person } from '../models/person';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';



export const CLASES: string[]=['Español','Geografia','Matematica'];	
export const CLASES2: string[]=['Español','Geografia','Matematica','Literatura'];


	
const STUDENTS: Student[] = [
  {
	id:1,
	age:14,
	name:"Johan",
	lastname:"Velandia",  
    clases: CLASES,
    grade: 8,
    group: "grupo1"
  },
  {
	id:2,
	age:16,
	name:"Jonh",
	lastname:"Velandia", 
    clases: CLASES2,
    grade: 10,
    group: "grupo2"
  }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	


	estuadiante1=new Student(1,14,'Pedro','Vargas',CLASES,8,'grupoA');
	estuadiante2=new Student(2,15,'Caro','MArtinez',CLASES,10,'grupoB');
	estudiantes: Student[]=new Array<Student>();
	clase1: string[]=CLASES;
	clase2: string[]=CLASES2;

	constructor(){
			this.estudiantes.push(new Student(1,14,'Pedro','Vargas',CLASES,8,"grupoA"));
			this.estudiantes.push(new Student(2,15,'Caro','MArtinez',CLASES,10,"grupoB"));
  
	}
  
	selected: Student;
	title = 'app';
  
	estudiantes1: Student[] = STUDENTS;

	onSelect(estudiantes1: Student){
		this.selected = estudiantes1;
	}
  
}
