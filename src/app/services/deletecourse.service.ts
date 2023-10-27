import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { DeletecourseComponent } from '../courses/deletecourse/deletecourse.component';
@Injectable({
  providedIn: 'root'
})
export class DeletecourseService {
  constructor(private http: HttpClient) {}

  DeleteCourse(courseID:number):Observable<number>{
    console.log(courseID);
    return this.http.delete<number>("https://localhost:44361/api/courses/"+courseID);
    //return this..delete<number>("https://localhost:44361/api/courses/"+courseID);
  }
}
