import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { DeleteStudentsComponent } from './students/delete-students/delete-students.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { DeletecourseComponent } from './courses/deletecourse/deletecourse.component';
import { GetAllCoursesComponent } from './courses/get-all-courses/get-all-courses.component';
import { GetAllStudentsComponent } from './students/get-all-students/get-all-students.component';
import { UpdatestudentsComponent } from './students/updatestudents/updatestudents.component';
import { UpdatecoursesComponent } from './courses/updatecourses/updatecourses.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentsComponent,
    DeleteStudentsComponent,
    AddCourseComponent,
    DeletecourseComponent,
    GetAllCoursesComponent,
    GetAllStudentsComponent,
    UpdatestudentsComponent,
    UpdatecoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
