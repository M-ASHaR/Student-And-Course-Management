import { Component,OnInit } from '@angular/core';
import { CourseserviceService } from 'src/app/services/courseservice.service';

@Component({
  selector: 'app-get-all-courses',
  templateUrl: './get-all-courses.component.html',
  styleUrls: ['./get-all-courses.component.css']
})
export class GetAllCoursesComponent {
  courses: any;
  courseID:number = 1;
  inputObject = {
    courseID:0,
    courseName: ''
  };
  constructor (private Courseserviceservice: CourseserviceService){}

  ngOnInit(): void {
    this.Courseserviceservice.getUsers().subscribe((data:any) => {
      this.courses = data;
      console.log(this.courses);
    });
  }

}
