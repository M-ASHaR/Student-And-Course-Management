import { Component } from '@angular/core';
import { AddstudentserviceService } from 'src/app/services/addstudentservice.service';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  students: any;
  studentID:number = 1;
  firstName:string = "";
  lastName:string ="";
  age:number=1;
  courseID:number=0;

  inputObject = {
    studentID:0,
    firstName: '',
    lastName:'',
    age:1,
    courseID:1
  };
  constructor  (private AddstudentserviceService:AddstudentserviceService){}

  AddStudent(studentID: string,firstName:string,lastName:string,age:string,courseID:string ){
    const student={
      studentID:parseInt(studentID),
      firstName:firstName,
      lastName:lastName,
      age:parseInt(age),
      courseID:parseInt(courseID)
    };
    console.log(student);
    this.AddstudentserviceService.postUser(student).subscribe(response=>{
    });

  }

}
