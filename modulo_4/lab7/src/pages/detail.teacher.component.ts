import { Component, Input } from '@angular/core';

import { Person } from '../models/person';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';

@Component({
  selector: 'teacher-detail',
  templateUrl: './detail.teacher.component.html'
})

export class TeacherDetailComponent {
  @Input()
  teacher: Teacher;
}