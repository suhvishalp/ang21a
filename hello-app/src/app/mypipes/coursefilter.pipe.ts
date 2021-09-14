import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course.model';

@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(list:Course[], trainer:string="Vishal"): Course[] {
    
    return list.filter(course => course.trainer == trainer)
    
  }

}
