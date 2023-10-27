import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { StudentsComponent } from '../students/students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  postusers(inputObject: { StudentID: number; firstName: string; lastName: string; age: number; CourseID: number; }) {
    throw new Error('Method not implemented.');
  }
  private readonly BASE_URL: string = 'https://localhost:44361/api/students';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<StudentsComponent[]> {
    return this.http.get<any>("https://localhost:44361/api/students");
  }
}
