import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CoursesComponent } from '../courses/courses.component';
@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  postusers(inputObject: { CourseID: number; CourseName: string;}) {
    throw new Error('Method not implemented.');
  }
  private readonly BASE_URL: string = 'https://localhost:44361/api/courses';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<CoursesComponent[]> {
    return this.http.get<any>("https://localhost:44361/api/courses");
  }
  // postUser(user: any) { 
  //   this.http.post(this.BASE_URL, user);
  // }
}
