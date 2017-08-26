import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../models/person';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';



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
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  @Input()
  student: Student;

  title="Estudiantes";
  constructor() { }

  ngOnInit() {
  }
  
  selected: Student;
  
  estudiantes1: Student[] = STUDENTS;

	onSelect(estudiantes1: Student){
		this.selected = estudiantes1;
	}

}
