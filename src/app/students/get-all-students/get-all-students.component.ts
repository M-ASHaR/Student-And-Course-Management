import { Component,OnInit } from '@angular/core';
import { StudentserviceService } from 'src/app/services/studentservice.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit{
  students: any;
  studentID:number = 1;
  inputObject = {
    StudentID:0,
    firstName: '',
    lastName: '',
    age: 0,
    CourseID:0
  };
  constructor (private Studentserviceservice: StudentserviceService){}

  ngOnInit(): void {
    this.Studentserviceservice.getUsers().subscribe((data:any) => {
      this.students = data;
      console.log(this.students);
    });
  }
  // AddStudent(){
  //   this.inputObject.firstName = "Ahmad";
  //   this.inputObject.lastName = "Khan";
  //   this.inputObject.age = 22;
  //   this.inputObject.CourseID = 501;

  //   this.Studentserviceservice.postStudents(this.inputObject);

  // }

  
}
