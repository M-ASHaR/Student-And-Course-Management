import { Component } from '@angular/core';
import { UpdatecourseService } from 'src/app/services/updatecourse.service';

@Component({
  selector: 'app-updatecourses',
  templateUrl: './updatecourses.component.html',
  styleUrls: ['./updatecourses.component.css'],
})
export class UpdatecoursesComponent {
  
  constructor(private UpdatecourseService: UpdatecourseService) {}
  
  UpdateCourse(courseID: string, courseName: string) {
    const course = {
      courseID: parseInt(courseID),
      courseName: courseName,
    };
    console.log(course);
    this.UpdatecourseService.updateUser(course,course.courseID).subscribe((response) => {
      console.log('Update successful:', response);
    });
  }
}
