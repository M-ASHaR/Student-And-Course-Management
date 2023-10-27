import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddStudentsComponent } from '../students/add-students/add-students.component';
@Injectable({
  providedIn: 'root'
})
export class AddstudentserviceService {

  private readonly BASE_URL: string = 'https://localhost:44361/api/students';

  constructor(private http: HttpClient) {}

  // Add a new course
  // AddCourse(course: AddCourseComponent): Observable<AddCourseComponent> {
  //   return this.http.post<AddCourseComponent>(this.BASE_URL, course);
  // }

  postUser(user: any) :Observable<any>{
    console.log(user);
    return this.http.post("https://localhost:44361/api/students", user);
  }
}
