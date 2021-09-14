import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SingleCourseComponent } from './course-list/single-course/single-course.component';
import { HighlightDirective } from './mydirectives/highlight.directive';
import { ShortenPipe } from './mypipes/shorten.pipe';
import { CoursefilterPipe } from './mypipes/coursefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CourseListComponent,
    SingleCourseComponent,
    HighlightDirective,
    ShortenPipe,
    CoursefilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
