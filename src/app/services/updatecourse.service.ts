import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UpdatecoursesComponent } from '../courses/updatecourses/updatecourses.component';
@Injectable({
  providedIn: 'root'
})
export class UpdatecourseService {

  private readonly BASE_URL: string = 'https://localhost:44361/api/courses';

  constructor(private http: HttpClient) {}

  // Add a new course
  // AddCourse(course: AddCourseComponent): Observable<AddCourseComponent> {
  //   return this.http.post<AddCourseComponent>(this.BASE_URL, course);
  // }

  updateUser(user: any,id:number) :Observable<any>{
    console.log(user);
    return this.http.post("https://localhost:44361/api/courses/"+id, user);
  }
}
