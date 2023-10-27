import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AddcourseserviceService } from 'src/app/services/addcourseservice.service';
// import { CoursesComponent } from '../courses.component';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  courses: any;
  courseID:number = 1;
  inputObject = {
    courseID:0,
    courseName: ''
  };
  constructor (private AddcourseserviceService: AddcourseserviceService){}
  // AddCourse(){
  //   this.inputObject.courseID= 12;
  //   this.inputObject.courseName = 'CureMD';

  //   this.AddcourseserviceService.postUser(this.inputObject);
  // }
  AddCourse(courseID: string,courseName:string ){
    const course={
      courseID:parseInt(courseID),
      courseName:courseName
    };
    console.log(course);
    this.AddcourseserviceService.postUser(course).subscribe(response=>{
    });

  }


}
