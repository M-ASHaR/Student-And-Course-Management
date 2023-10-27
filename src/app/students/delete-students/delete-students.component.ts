import { Component } from '@angular/core';
import { DeletestudentService } from 'src/app/services/deletestudent.service';

@Component({
  selector: 'app-delete-students',
  templateUrl: './delete-students.component.html',
  styleUrls: ['./delete-students.component.css']
})
export class DeleteStudentsComponent {
  constructor(private Deletestudentservice:DeletestudentService){}

  DeleteStudent(studentID:string)
  {
    const del = parseInt(studentID);
    this.Deletestudentservice.DeleteStudent(del).subscribe({

    })

  }


}
