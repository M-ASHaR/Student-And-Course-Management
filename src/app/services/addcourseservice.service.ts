import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCourseComponent } from '../courses/add-course/add-course.component';
@Injectable({
  providedIn: 'root',
})
export class AddcourseserviceService {
  private readonly BASE_URL: string = 'https://localhost:44361/api/courses';

  constructor(private http: HttpClient) {}

  // Add a new course
  // AddCourse(course: AddCourseComponent): Observable<AddCourseComponent> {
  //   return this.http.post<AddCourseComponent>(this.BASE_URL, course);
  // }

  postUser(user: any) :Observable<any>{
    console.log(user);
    return this.http.post("https://localhost:44361/api/courses", user);
  }

}
