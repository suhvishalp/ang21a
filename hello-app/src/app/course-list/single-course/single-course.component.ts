import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  @Input()
  public course:Course | null;

  constructor() {
    this.course = null;
   }

  ngOnInit(): void {
  }

}
