import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseList: Course[];

  constructor() { 
    this.courseList = [
      new Course(1, 'Angular', '40 hrs', new Date('10/09/2021'), 'Vishal'),
      new Course(2, 'React', '50 hrs', new Date('12/23/2021'), 'Mahesh'),
      new Course(3, 'Java', '90 hrs', new Date('3/09/2021'), 'Vishal'),
      new Course(4, 'Spring', '20 hrs', new Date('5/09/2021'), 'Mahesh'),
    ]
  }

  ngOnInit(): void {
  }

  handleAddCourse(){
    console.log('Clicked add course button..')
  }

}
