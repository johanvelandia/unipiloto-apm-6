import { Component, Input } from '@angular/core';

import { Person } from '../models/person';
import { Student } from '../models/student';

@Component({
  selector: 'student-detail',
  templateUrl: './detail.student.component.html'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}