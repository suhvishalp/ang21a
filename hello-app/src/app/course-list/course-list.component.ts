import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseList: Course[];
  public selectedCourse: Course | null;

  constructor() { 
    this.selectedCourse = null;
    this.courseList = [
      new Course(1, 'Angular', "Some quick example text to build on the card title and make up the bulk of the card's content." ,'40 hrs',new Date('10/09/2021'), 'Vishal'),
      new Course(2, 'React', "Some quick example text to build on the card title and make up the bulk of the card's content." ,'50 hrs', new Date('12/23/2021'), 'Mahesh'),
      new Course(3, 'Java', "Some quick example text to build on the card title and make up the bulk of the card's content." ,'90 hrs', new Date('3/09/2021'), 'Vishal'),
      new Course(4, 'Spring', "Some quick example text to build on the card title and make up the bulk of the card's content." , '20 hrs', new Date('5/09/2021'), 'Mahesh'),
    ]
  }

  ngOnInit(): void {
  }

  handleAddCourse(){
    console.log('Clicked add course button..')
  }

  handleOnSelectCourse(eventData:Course | null){
    this.selectedCourse = eventData;
  }

}
