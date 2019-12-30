import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.css']
})
export class StudentListItemComponent implements OnInit {
  @Input() student: any;
  constructor() { }

  ngOnInit() {
  }

}
