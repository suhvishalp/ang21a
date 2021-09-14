import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  @Input()
  public course:Course | null;

  @Output()
  public onSelectEnroll: EventEmitter<Course | null>;

  constructor() {
    this.course = null;
    this.onSelectEnroll = new EventEmitter<Course | null>();
   }

  ngOnInit(): void {
  }

  handleEnroll(){
    //emit a custom event and send the course data to parent component
    this.onSelectEnroll.emit(this.course)
  }

}
