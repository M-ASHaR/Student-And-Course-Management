import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeleteStudentsComponent } from '../students/delete-students/delete-students.component';

@Injectable({
  providedIn: 'root'
})
export class DeletestudentService {

  constructor(private http: HttpClient) {}
  DeleteStudent(studentID:number):Observable<number>{
    console.log(studentID);
    return this.http.delete<number>("https://localhost:44361/api/students/"+studentID);
    //return this..delete<number>("https://localhost:44361/api/courses/"+courseID);
  }
}
