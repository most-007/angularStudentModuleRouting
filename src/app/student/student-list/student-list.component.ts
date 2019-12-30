import { Component, OnInit } from '@angular/core';
import { Student } from '../entity/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentservice: StudentService) { }

  ngOnInit() {
      const studentObservable = this.studentservice.getStudents();
      studentObservable.subscribe((studentsData: Student[]) => {
          this.students = studentsData;
      });
  }
}
