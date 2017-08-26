import { Component, OnInit, Input} from '@angular/core';

import { Person } from '../models/person';
import { Student } from '../models/student';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input()
  student: Student;
}
